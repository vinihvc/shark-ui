import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "tour",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button", "dialog"],
};

export default manifest;
