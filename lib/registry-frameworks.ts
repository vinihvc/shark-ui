export const REGISTRY_FRAMEWORKS = ["react", "solid"] as const;

export type RegistryFramework = (typeof REGISTRY_FRAMEWORKS)[number];

export const REGISTRY_PUBLIC_SEGMENT: Record<RegistryFramework, string> = {
  react: "r",
  solid: "s",
};

export const REGISTRY_SOURCE_EXTENSION: Record<RegistryFramework, string> = {
  react: ".tsx",
  solid: ".tsx",
};
