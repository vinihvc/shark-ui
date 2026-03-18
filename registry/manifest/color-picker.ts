import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  name: "color-picker",
  type: "registry:ui",
  dependencies: ["@ark-ui/react", "lucide-react"],
  registryDependencies: [absoluteUrl("/r/button.json")],
};

export default manifest;
