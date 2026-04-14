import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "status",
  type: "registry:ui",
  dependencies,
};

export default manifest;
