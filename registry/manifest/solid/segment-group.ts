import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid"];

const manifest: RegistryItemType = {
  name: "segment-group",
  type: "registry:ui",
  dependencies,
};

export default manifest;
