import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "bottom-navigation",
  type: "registry:ui",
  dependencies,
};

export default manifest;
