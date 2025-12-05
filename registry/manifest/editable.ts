import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "editable",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["input"],
};

export default manifest;
