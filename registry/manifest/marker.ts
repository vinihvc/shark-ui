import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "Status line, system note, or labeled separator for chat transcripts.",
  name: "marker",
  type: "registry:ui",
};

export default manifest;
