import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "autocomplete",
  registryDependencies: [
    absoluteUrl("/r/combobox.json"),
    absoluteUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
