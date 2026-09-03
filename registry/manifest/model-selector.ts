import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description: "Combobox picker for models and agents with optional search.",
  name: "model-selector",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/combobox.json"),
    absoluteUrl("/r/input-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
