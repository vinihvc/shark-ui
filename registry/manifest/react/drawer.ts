import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "drawer",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/scroll-area.json")],
};

export default manifest;
