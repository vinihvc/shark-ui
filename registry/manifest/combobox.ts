import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "combobox",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button", "input"],
};

export default manifest;
