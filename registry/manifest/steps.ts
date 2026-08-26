import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "steps",
  type: "registry:ui",
};

export default manifest;
