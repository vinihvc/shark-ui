import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "Shell output panel with basic ANSI color mapping.",
  name: "terminal",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/clipboard.json"),
    absoluteUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
