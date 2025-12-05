import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "textarea",
  type: "registry:ui",
  dependencies,
};

export default manifest;
