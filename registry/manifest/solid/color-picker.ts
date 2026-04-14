import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  name: "color-picker",
  type: "registry:ui",
  dependencies: ["@ark-ui/solid", "lucide-solid"],
  registryDependencies: [absoluteRegistryItemUrl("solid", "button")],
};

export default manifest;
