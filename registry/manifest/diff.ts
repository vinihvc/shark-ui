import type { RegistryItemType } from "@/lib/registry";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "tailwind-variants"],
  description: "Unified diff hunks with add, delete, and context lines.",
  name: "diff",
  type: "registry:ui",
};

export default manifest;
