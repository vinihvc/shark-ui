import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "calendar",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/native-select.json"),
  ],
  type: "registry:ui",
};

export default manifest;
