import type { RegistryItemType } from "@/lib/registry";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "Shell output panel with basic ANSI color mapping.",
  name: "terminal",
  type: "registry:ui",
};

export default manifest;
