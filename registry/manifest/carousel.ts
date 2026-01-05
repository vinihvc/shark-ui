import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "carousel",
  type: "registry:ui",
  dependencies,
  registryDependencies: [`${SITE_CONFIG.url}/r/button.json`],
};

export default manifest;
