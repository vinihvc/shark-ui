import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "autocomplete",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/combobox.json"),
    absoluteUrl("/r/input.json"),
  ],
};

export default manifest;
