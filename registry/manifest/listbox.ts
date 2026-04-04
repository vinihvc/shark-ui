import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "listbox",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/menu.json")],
};

export default manifest;
