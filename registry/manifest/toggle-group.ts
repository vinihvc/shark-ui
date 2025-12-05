import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "toggle-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["toggle"],
};

export default manifest;
