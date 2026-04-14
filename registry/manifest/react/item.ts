import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "item",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/separator.json")],
};

export default manifest;
