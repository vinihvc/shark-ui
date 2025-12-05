import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "toggle",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button"],
};

export default manifest;
