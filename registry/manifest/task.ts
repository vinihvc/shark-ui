import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description:
    "Collapsible agent workflow tasks with progress states and details.",
  name: "task",
  registryDependencies: [
    absoluteUrl("/r/badge.json"),
    absoluteUrl("/r/collapsible.json"),
    absoluteUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
