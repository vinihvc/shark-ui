import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "input-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    `${SITE_CONFIG.url}/r/input.json`,
    `${SITE_CONFIG.url}/r/button.json`,
    `${SITE_CONFIG.url}/r/textarea.json`,
  ],
};

export default manifest;
