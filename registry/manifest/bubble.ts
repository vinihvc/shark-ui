import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "Message surface with variants, alignment, and reaction clusters.",
  name: "bubble",
  type: "registry:ui",
};

export default manifest;
