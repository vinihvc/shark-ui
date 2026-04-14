import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "number-input",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "button"),
    absoluteRegistryItemUrl("solid", "field"),
    absoluteRegistryItemUrl("solid", "input"),
  ],
};

export default manifest;
