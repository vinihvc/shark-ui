import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "data-list",
  type: "registry:ui",
};

export default manifest;
