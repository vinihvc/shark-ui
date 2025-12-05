import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "file-upload",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button"],
};

export default manifest;
