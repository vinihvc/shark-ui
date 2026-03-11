import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "action-bar",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/button.json")],
};

export default manifest;
