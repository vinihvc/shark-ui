import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description:
    "Context window usage meter with token breakdown and optional cost.",
  name: "context",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/hover-card.json"),
    absoluteUrl("/r/progress.json"),
  ],
  type: "registry:ui",
};

export default manifest;
