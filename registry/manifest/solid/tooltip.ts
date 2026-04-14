import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid"];

const manifest: RegistryItemType = {
  name: "tooltip",
  type: "registry:ui",
  dependencies,
};

export default manifest;
