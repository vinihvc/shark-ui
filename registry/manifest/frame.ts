import type { RegistryItemType } from "@/lib/registry";

const dependencies: string[] = [];

const manifest: RegistryItemType = {
  name: "frame",
  type: "registry:ui",
  dependencies,
};

export default manifest;
