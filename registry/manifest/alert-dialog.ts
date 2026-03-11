import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "alert-dialog",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/dialog.json"),
  ],
};

export default manifest;
