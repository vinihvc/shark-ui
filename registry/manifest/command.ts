import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "command",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["combobox"],
};

export default manifest;
