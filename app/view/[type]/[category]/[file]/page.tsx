import { extname } from "node:path";
import { notFound } from "next/navigation";
import { getRegistryItem } from "@/lib/registry";

const VIEW_REGISTRY_FOLDER_TYPES = ["blocks", "examples", "templates"] as const;
const VIEW_REGISTRY_FOLDER_TYPE_SET = new Set(VIEW_REGISTRY_FOLDER_TYPES);
type ViewRegistryFolderType = (typeof VIEW_REGISTRY_FOLDER_TYPES)[number];

const isViewRegistryFolderType = (
  value: string
): value is ViewRegistryFolderType =>
  VIEW_REGISTRY_FOLDER_TYPE_SET.has(value as ViewRegistryFolderType);

export const revalidate = false;
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const byFolder = await Promise.all(
    VIEW_REGISTRY_FOLDER_TYPES.map(async (folderType) => {
      const items = await getRegistryItem({
        framework: "react",
        folderType,
      });
      return items
        .filter((item) => extname(item.name) === ".tsx")
        .map((item) => ({
          type: folderType,
          category: item.category,
          file: item.name.slice(0, -".tsx".length),
        }));
    })
  );

  return byFolder.flat();
};

const ViewRegistryPage = async (
  props: PageProps<"/view/[type]/[category]/[file]">
) => {
  const { type, category, file } = await props.params;

  if (!(type || category || file)) {
    notFound();
  }

  if (!isViewRegistryFolderType(type)) {
    notFound();
  }

  const files = await getRegistryItem({
    framework: "react",
    folderType: type,
  });

  const fileComponent = files.find((e) =>
    e.path.includes(`${type}/${category}/${file}.tsx`)
  );

  if (!fileComponent) {
    notFound();
  }

  const Component = await import(
    `registry/react/${type}/${category}/${file}.tsx`
  );

  if (!Component.default) {
    throw new Error(`File ${file} not found`);
  }

  return (
    <div className="min-h-svh bg-background **:data-[slot=card]:rounded-none **:data-[slot=card]:border-0 **:data-[slot=card]:shadow-none">
      <Component.default />
    </div>
  );
};

export default ViewRegistryPage;
