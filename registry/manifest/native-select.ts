import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "native-select",
  registryDependencies: [absoluteUrl("/r/field.json")],
  type: "registry:ui",
};

export default manifest;
