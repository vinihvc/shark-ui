import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "Installable code panel with filename, copy, and line numbers.",
  name: "code-block",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/clipboard.json"),
  ],
  type: "registry:ui",
};

export default manifest;
