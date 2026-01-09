import { SITE_CONFIG } from "@/config/site";
import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "command",
  type: "registry:ui",
  dependencies,
  registryDependencies: [`${SITE_CONFIG.url}/r/combobox.json`],
};

export default manifest;
