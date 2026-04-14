import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "checkbox",
  type: "registry:ui",
  dependencies,
};

export default manifest;
