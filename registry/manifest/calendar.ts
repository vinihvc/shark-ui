import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "date-fns", "lucide-react"];

const manifest: RegistryItemType = {
  name: "calendar",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    `${SITE_CONFIG.url}/r/button.json`,
    `${SITE_CONFIG.url}/r/input.json`,
  ],
};

export default manifest;
