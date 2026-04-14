import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "action-bar",
  type: "registry:ui",
  dependencies,
};

export default manifest;
