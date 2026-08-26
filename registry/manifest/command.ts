import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "command",
  registryDependencies: [
    absoluteUrl("/r/combobox.json"),
    absoluteUrl("/r/dialog.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/input-group.json"),
    absoluteUrl("/r/menu.json"),
    absoluteUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
