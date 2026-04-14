import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "data-list",
  type: "registry:ui",
  dependencies,
};

export default manifest;
