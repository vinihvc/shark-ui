import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid"];

const manifest: RegistryItemType = {
  name: "bottom-navigation",
  type: "registry:ui",
  dependencies,
};

export default manifest;
