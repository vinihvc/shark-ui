import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "item",
  type: "registry:ui",
  dependencies,
  registryDependencies: [`${SITE_CONFIG.url}/r/separator.json`],
};

export default manifest;
