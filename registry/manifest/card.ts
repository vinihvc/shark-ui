import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "card",
  type: "registry:ui",
};

export default manifest;
