import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "input-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "input"),
    absoluteRegistryItemUrl("solid", "button"),
    absoluteRegistryItemUrl("solid", "textarea"),
  ],
};

export default manifest;
