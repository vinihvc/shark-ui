import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "recharts"];

const manifest: RegistryItemType = {
  name: "chart",
  type: "registry:ui",
  dependencies,
};

export default manifest;
