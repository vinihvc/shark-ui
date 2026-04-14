import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "timer",
  type: "registry:ui",
  dependencies,
};

export default manifest;
