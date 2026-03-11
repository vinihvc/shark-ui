import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "command",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/combobox.json")],
};

export default manifest;
