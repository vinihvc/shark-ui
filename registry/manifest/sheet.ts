import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "sheet",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button", "dialog"],
};

export default manifest;
