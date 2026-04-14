import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "floating-panel",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "button"),
    absoluteRegistryItemUrl("solid", "scroll-area"),
  ],
};

export default manifest;
