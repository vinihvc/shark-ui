import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "tailwind-variants", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "sidebar",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "button"),
    absoluteRegistryItemUrl("solid", "input"),
    absoluteRegistryItemUrl("solid", "scroll-area"),
    absoluteRegistryItemUrl("solid", "separator"),
    absoluteRegistryItemUrl("solid", "sheet"),
    absoluteRegistryItemUrl("solid", "skeleton"),
    absoluteRegistryItemUrl("solid", "tooltip"),
    absoluteRegistryItemUrl("solid", "use-is-mobile"),
  ],
};

export default manifest;
