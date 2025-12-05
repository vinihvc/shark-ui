import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "marquee",
  type: "registry:ui",
  dependencies,
};

export default manifest;
