import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "download-trigger",
  type: "registry:ui",
  dependencies,
};

export default manifest;
