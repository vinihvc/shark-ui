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

export const registrySchema = registryItemSchema.extend(
  z.object({
    files: z.array(
      z.object({
        path: z.string(),
        content: z.string(),
        type: registryItemFileTypes,
      })
    ),
  })
);

export interface RegistryType extends z.infer<typeof registrySchema> {}
