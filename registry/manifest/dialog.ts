import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "dialog",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button"],
};

export default manifest;
