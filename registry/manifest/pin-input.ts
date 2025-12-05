import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "pin-input",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["input"],
};

export default manifest;
