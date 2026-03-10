import type { RegistryItemType } from "@/lib/registry";

const manifest: RegistryItemType = {
  name: "color-picker",
  type: "registry:ui",
  dependencies: ["@ark-ui/react", "lucide-react"],
  registryDependencies: ["input", "input-group", "button"],
};

export default manifest;
