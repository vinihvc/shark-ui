import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "rating",
  type: "registry:ui",
  dependencies,
};

export default manifest;
