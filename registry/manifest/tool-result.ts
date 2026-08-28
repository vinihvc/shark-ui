import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description: "Collapsible tool result row with title, meta, and status.",
  name: "tool-result",
  registryDependencies: [absoluteUrl("/r/collapsible.json")],
  type: "registry:ui",
};

export default manifest;
