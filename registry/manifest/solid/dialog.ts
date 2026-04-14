import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "tailwind-variants", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "dialog",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "button"),
    absoluteRegistryItemUrl("solid", "scroll-area"),
  ],
};

export default manifest;
