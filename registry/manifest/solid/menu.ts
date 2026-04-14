import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid", "tailwind-variants", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "menu",
  type: "registry:ui",
  dependencies,
};

export default manifest;
