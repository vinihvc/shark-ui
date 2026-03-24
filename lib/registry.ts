import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import z from "zod";

export const registryItemFileTypes = z.enum(["registry:ui", "registry:hook"]);

export const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemFileTypes,
  dependencies: z.array(z.string()),
  registryDependencies: z.array(z.string()).optional(),
  cssVars: z.record(z.string(), z.record(z.string(), z.string())).optional(),
  css: z
    .record(z.string(), z.record(z.string(), z.record(z.string(), z.string())))
    .optional(),
});

export interface RegistryItemType extends z.infer<typeof registryItemSchema> {}

export const registrySchema = registryItemSchema.extend({
  files: z.array(
    z.object({
      path: z.string(),
      content: z.string(),
      type: registryItemFileTypes,
    })
  ),
});

export interface RegistryType extends z.infer<typeof registrySchema> {}

export const getAllRegistryItems = async (args: GetRegistryItemArgs) => {
  const { framework = "react", folderType } = args;

  const registryPath = join(cwd(), "registry", framework, folderType);

  const categories = await readdir(registryPath);

  const items = [];

  for (const category of categories) {
    const categoryPath = join(registryPath, category);
    const categoryItems = await readdir(categoryPath);
    for (const item of categoryItems) {
      items.push({
        type: folderType,
        category,
        name: item,
      });
    }
  }

  return items;
};

interface GetRegistryItemArgs {
  /**
   * The folder type to get the registry items from.
   */
  folderType: "blocks" | "templates";
  /**
   * The framework to get the registry items from.
   *
   * @default "react"
   */
  framework?: "react" | "vue" | "solid" | "svelte";
}

export const getRegistryItem = async (args: GetRegistryItemArgs) => {
  const { framework = "react", folderType } = args;

  const registryPath = join(cwd(), "registry", framework, folderType);

  const categories = await readdir(registryPath);

  const items = [];

  for (const category of categories) {
    const categoryPath = join(registryPath, category);

    const categoryComponents = await readdir(categoryPath);

    for (const component of categoryComponents) {
      items.push({
        type: folderType,
        category,
        name: component,
        path: `${registryPath}/${category}/${component}`,
      });
    }
  }

  return items;
};
