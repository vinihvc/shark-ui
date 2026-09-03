import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "Message surface with variants, alignment, and reaction clusters.",
  name: "message-bubble",
  type: "registry:ui",
};

export default manifest;
