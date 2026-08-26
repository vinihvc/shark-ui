import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "checkbox",
  type: "registry:ui",
};

export default manifest;
