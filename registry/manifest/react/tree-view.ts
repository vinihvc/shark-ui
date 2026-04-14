import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "tree-view",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/checkbox.json")],
};

export default manifest;
