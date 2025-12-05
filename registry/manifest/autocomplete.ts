import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "autocomplete",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["combobox", "input"],
};

export default manifest;
