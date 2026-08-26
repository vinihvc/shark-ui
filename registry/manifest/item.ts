import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "item",
  registryDependencies: [absoluteUrl("/r/separator.json")],
  type: "registry:ui",
};

export default manifest;
