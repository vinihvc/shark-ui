import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "command",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/combobox.json"),
    absoluteUrl("/r/dialog.json"),
    absoluteUrl("/r/input-group.json"),
    absoluteUrl("/r/menu.json"),
    absoluteUrl("/r/separator.json"),
  ],
};

export default manifest;
