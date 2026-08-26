import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "tailwind-variants"],
  description: "Collapsible tool call card with status, params, and result.",
  name: "tool",
  registryDependencies: [
    absoluteUrl("/r/badge.json"),
    absoluteUrl("/r/collapsible.json"),
    absoluteUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
