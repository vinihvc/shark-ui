import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "drawer",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    `${SITE_CONFIG.url}/r/button.json`,
    `${SITE_CONFIG.url}/r/scroll-area.json`,
  ],
};

export default manifest;
