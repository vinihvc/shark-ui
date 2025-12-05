import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "number-input",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button", "input"],
};

export default manifest;
