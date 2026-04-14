import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "date-picker",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "button"),
    absoluteRegistryItemUrl("solid", "calendar"),
    absoluteRegistryItemUrl("solid", "input"),
    absoluteRegistryItemUrl("solid", "input-group"),
  ],
};

export default manifest;
