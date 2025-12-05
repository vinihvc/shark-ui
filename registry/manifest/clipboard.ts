import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "clipboard",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["input"],
};

export default manifest;
