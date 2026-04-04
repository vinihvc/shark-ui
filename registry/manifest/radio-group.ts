import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "radio-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/field.json")],
};

export default manifest;
