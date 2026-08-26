import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "radio-group",
  registryDependencies: [absoluteUrl("/r/field.json")],
  type: "registry:ui",
};

export default manifest;
