import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import type React from "react";
import z from "zod";

export const registryItemFileTypes = z.enum([
  "registry:ui",
  "registry:hook",
  "registry:style",
  "registry:lib",
  "registry:block",
  "registry:component",
  "registry:page",
  "registry:file",
  "registry:item",
]);

export const registryItemFileEntrySchema = z.object({
  content: z.string().optional(),
  path: z.string(),
  target: z.string().optional(),
  type: registryItemFileTypes,
});

export const registryItemSchema = z.object({
  categories: z.array(z.string()).optional(),
  css: z.record(z.string(), z.unknown()).optional(),
  cssVars: z.record(z.string(), z.record(z.string(), z.string())).optional(),
  dependencies: z.array(z.string()).default([]),
  description: z.string().optional(),
  devDependencies: z.array(z.string()).optional(),
  extends: z.string().optional(),
  files: z.array(registryItemFileEntrySchema).optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
  name: z.string(),
  registryDependencies: z.array(z.string()).optional(),
  title: z.string().optional(),
  type: registryItemFileTypes,
});

export interface RegistryItemType extends z.infer<typeof registryItemSchema> {}

export const registrySchema = registryItemSchema.extend({
  files: z.array(registryItemFileEntrySchema),
});

export interface RegistryType extends z.infer<typeof registrySchema> {}

export interface CompositionCategory {
  description: string;
  label: string;
  order: number;
  slug: string;
}

export type CompositionFileType =
  | "registry:block"
  | "registry:component"
  | "registry:page"
  | "registry:file";

export interface CompositionFileDefinition {
  /** Path exposed in the registry JSON. */
  path: string;
  /** Path relative to the block directory. */
  source: string;
  target?: string;
  type: CompositionFileType;
}

export interface CompositionDefinition {
  category: string;
  dependencies?: string[];
  description: string;
  files: CompositionFileDefinition[];
  meta: {
    featured?: boolean;
    order: number;
    previewHeight: number;
  };
  name: string;
  preview: () => Promise<{ default: React.ComponentType }>;
  registryDependencies: string[];
  title: string;
  type: "registry:block";
}

export interface CompositionArtifactFile extends CompositionFileDefinition {
  content: string;
  displayPath: string;
}

export interface CompositionArtifact
  extends Omit<CompositionDefinition, "files" | "preview"> {
  files: CompositionArtifactFile[];
}

export interface PublishedCompositionFile extends CompositionArtifactFile {
  highlightedContent: string;
}

export interface PublishedComposition
  extends Omit<CompositionDefinition, "files" | "preview"> {
  files: PublishedCompositionFile[];
}

export interface CompositionFileTreeNode {
  children?: CompositionFileTreeNode[];
  name: string;
  path?: string;
}

export type BlockCategory = CompositionCategory;
export type BlockFileType = CompositionFileType;
export interface BlockFileDefinition extends CompositionFileDefinition {}
export interface BlockDefinition extends CompositionDefinition {}
export interface PublishedBlockFile extends PublishedCompositionFile {}
export interface PublishedBlock extends PublishedComposition {}
export interface BlockFileTreeNode extends CompositionFileTreeNode {}

export type TemplateCategory = CompositionCategory;
export type TemplateFileType = CompositionFileType;
export interface TemplateFileDefinition extends CompositionFileDefinition {}
export interface TemplateDefinition extends CompositionDefinition {}
export interface PublishedTemplateFile extends PublishedCompositionFile {}
export interface PublishedTemplate extends PublishedComposition {}
export interface TemplateFileTreeNode extends CompositionFileTreeNode {}

export interface GetRegistryItemArgs {
  /**
   * The folder type to get the registry items from.
   */
  folderType: "blocks" | "examples" | "templates";
  /**
   * The framework to get the registry items from.
   *
   * @default "react"
   */
  framework?: "react" | "vue" | "solid" | "svelte";
}

interface RegistryListItemWithPath {
  category: string;
  name: string;
  path: string;
  type: GetRegistryItemArgs["folderType"];
}

export const getRegistryItem = async (args: GetRegistryItemArgs) => {
  const { framework = "react", folderType } = args;

  const registryPath = join(cwd(), "registry", framework, folderType);

  const categories = await readdir(registryPath, { withFileTypes: true });

  const directoryCategories = categories.filter(
    (category) => category.isDirectory() && !category.name.startsWith("_")
  );
  const items = await Promise.all(
    directoryCategories.map(async (category) => {
      const categoryPath = join(registryPath, category.name);
      const categoryComponents = await readdir(categoryPath, {
        withFileTypes: true,
      });
      return categoryComponents
        .filter(
          (component) => component.isFile() && !component.name.startsWith("_")
        )
        .map(
          (component): RegistryListItemWithPath => ({
            category: category.name,
            name: component.name,
            path: `${registryPath}/${category.name}/${component.name}`,
            type: folderType,
          })
        );
    })
  );

  return items.flat();
};
