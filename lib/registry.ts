import z from "zod";

export const registryItemSchema = z.object({
  name: z.string(),
  type: z.enum(["registry:ui"]),
  dependencies: z.array(z.string()),
  registryDependencies: z.array(z.string()).optional(),
  cssVars: z.record(z.string(), z.record(z.string(), z.string())).optional(),
});

export type RegistryItemType = z.infer<typeof registryItemSchema>;

export const registrySchema = registryItemSchema.extend(
  z.object({
    files: z.array(
      z.object({
        path: z.string(),
        content: z.string(),
        type: z.enum(["registry:ui"]),
      })
    ),
  })
);

export type RegistryType = z.infer<typeof registrySchema>;
