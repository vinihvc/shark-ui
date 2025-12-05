import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "context-menu",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["menu"],
};

export default manifest;
