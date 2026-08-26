import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "sheet",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/dialog.json"),
  ],
  type: "registry:ui",
};

export default manifest;
