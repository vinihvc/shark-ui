import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "file-upload",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/button.json")],
};

export default manifest;
