import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "select",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/input.json")],
};

export default manifest;
