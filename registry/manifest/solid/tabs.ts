import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid"];

const manifest: RegistryItemType = {
  name: "tabs",
  type: "registry:ui",
  dependencies,
};

export default manifest;
