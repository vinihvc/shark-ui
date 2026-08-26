import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "Agent task row with status, files, and collapsible details.",
  name: "task",
  registryDependencies: [
    absoluteUrl("/r/badge.json"),
    absoluteUrl("/r/collapsible.json"),
    absoluteUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
