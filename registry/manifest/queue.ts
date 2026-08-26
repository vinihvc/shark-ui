import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description: "Collapsible queue of pending prompts and completed items.",
  name: "queue",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/collapsible.json"),
  ],
  type: "registry:ui",
};

export default manifest;
