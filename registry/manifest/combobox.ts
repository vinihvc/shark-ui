import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "combobox",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/input-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
