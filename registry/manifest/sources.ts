import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description: "Collapsible citations and inline source footnotes.",
  name: "sources",
  registryDependencies: [
    absoluteUrl("/r/collapsible.json"),
    absoluteUrl("/r/hover-card.json"),
  ],
  type: "registry:ui",
};

export default manifest;
