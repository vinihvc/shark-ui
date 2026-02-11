import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "toggle-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    `${SITE_CONFIG.url}/r/toggle.json`,
    `${SITE_CONFIG.url}/r/tooltip.json`,
  ],
};

export default manifest;
