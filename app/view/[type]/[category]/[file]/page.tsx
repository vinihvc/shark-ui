import { extname } from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";
import { PreviewThemeSync } from "@/components/registry-compositions/preview-theme-sync";
import { getBlockDefinition } from "@/lib/blocks";
import { getRegistryItem } from "@/lib/registry";
import { getTemplateDefinition } from "@/lib/templates";
import { cn } from "@/lib/utils";
import { BLOCKS } from "@/registry/react/blocks/_registry";
import { TEMPLATES } from "@/registry/react/templates/_registry";

const VIEW_REGISTRY_FOLDER_TYPES = ["blocks", "templates"] as const;
const VIEW_REGISTRY_FOLDER_TYPE_SET = new Set(VIEW_REGISTRY_FOLDER_TYPES);
type ViewRegistryFolderType = (typeof VIEW_REGISTRY_FOLDER_TYPES)[number];

/** Retired preview slugs — still emitted so static export serves app/not-found. */
const RETIRED_VIEW_PARAMS = [
  { category: "ai", file: "ai-chat-01", type: "templates" },
  { category: "ai", file: "ai-ide-01", type: "templates" },
] as const;

const isViewRegistryFolderType = (
  value: string
): value is ViewRegistryFolderType =>
  VIEW_REGISTRY_FOLDER_TYPE_SET.has(value as ViewRegistryFolderType);

export const revalidate = false;
export const dynamicParams = false;

const isRetiredView = (type: string, category: string, file: string) =>
  RETIRED_VIEW_PARAMS.some(
    (entry) =>
      entry.type === type && entry.category === category && entry.file === file
  );

export const generateStaticParams = async () => {
  const byFolder = await Promise.all(
    VIEW_REGISTRY_FOLDER_TYPES.map(async (folderType) => {
      const items = await getRegistryItem({
        folderType,
        framework: "react",
      });
      return items
        .filter((item) => extname(item.name) === ".tsx")
        .map((item) => ({
          category: item.category,
          file: item.name.slice(0, -".tsx".length),
          type: folderType,
        }));
    })
  );

  const publishedBlocks = BLOCKS.map((block) => ({
    category: block.category,
    file: block.name,
    type: "blocks" as const,
  }));

  const publishedTemplates = TEMPLATES.map((template) => ({
    category: template.category,
    file: template.name,
    type: "templates" as const,
  }));

  return [
    ...byFolder.flat(),
    ...publishedBlocks,
    ...publishedTemplates,
    ...RETIRED_VIEW_PARAMS,
  ];
};

export const generateMetadata = async (
  props: PageProps<"/view/[type]/[category]/[file]">
): Promise<Metadata> => {
  const { type, category, file } = await props.params;

  if (isRetiredView(type, category, file)) {
    notFound();
  }

  const block = type === "blocks" ? getBlockDefinition(category, file) : null;
  const template =
    type === "templates" ? getTemplateDefinition(category, file) : null;
  const composition = block ?? template;

  return composition
    ? {
        description: composition.description,
        robots: { follow: false, index: false },
        title: `${composition.title} Preview`,
      }
    : {
        robots: { follow: false, index: false },
        title: `${file} Preview`,
      };
};

const ViewRegistryPage = async (
  props: PageProps<"/view/[type]/[category]/[file]">
) => {
  const { type, category, file } = await props.params;

  if (isRetiredView(type, category, file)) {
    notFound();
  }

  if (!(type && category && file)) {
    notFound();
  }

  if (!isViewRegistryFolderType(type)) {
    notFound();
  }

  let Preview: React.ComponentType;
  const block = type === "blocks" ? getBlockDefinition(category, file) : null;
  const template =
    type === "templates" ? getTemplateDefinition(category, file) : null;
  const composition = block ?? template;

  if (composition) {
    const module = await composition.preview();
    Preview = module.default;
  } else {
    const files = await getRegistryItem({
      folderType: type,
      framework: "react",
    });

    const fileComponent = files.find((item) =>
      item.path.includes(`${type}/${category}/${file}.tsx`)
    );

    if (!fileComponent) {
      notFound();
    }

    const module = await import(
      `@/registry/react/${type}/${category}/${file}.tsx`
    );

    if (!module.default) {
      throw new Error(`File ${file} not found`);
    }
    Preview = module.default;
  }

  return (
    <div
      className={cn(
        !composition &&
          "**:data-[slot=card]:rounded-none **:data-[slot=card]:border-0 **:data-[slot=card]:shadow-none"
      )}
    >
      <PreviewThemeSync />
      <Preview />
    </div>
  );
};

export default ViewRegistryPage;
