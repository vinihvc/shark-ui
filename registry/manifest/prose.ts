import type { RegistryItemType } from "@/lib/registry";

const dependencies: string[] = [];

const cssVars = {};

const manifest: RegistryItemType = {
  name: "prose",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
