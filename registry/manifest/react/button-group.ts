import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "button-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/separator.json")],
};

export default manifest;
