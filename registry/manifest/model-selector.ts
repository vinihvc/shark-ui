import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description: "Popover picker for models and agents with optional search.",
  name: "model-selector",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/popover.json"),
  ],
  type: "registry:ui",
};

export default manifest;
