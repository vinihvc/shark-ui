import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "tour",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/dialog.json"),
  ],
};

export default manifest;
