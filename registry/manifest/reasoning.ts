import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description: "Expandable model thinking with duration and streaming label.",
  name: "reasoning",
  registryDependencies: [
    absoluteUrl("/r/collapsible.json"),
    absoluteUrl("/r/shimmer.json"),
  ],
  type: "registry:ui",
};

export default manifest;
