import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "command",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteRegistryItemUrl("solid", "combobox"),
    absoluteRegistryItemUrl("solid", "dialog"),
    absoluteRegistryItemUrl("solid", "input"),
    absoluteRegistryItemUrl("solid", "input-group"),
    absoluteRegistryItemUrl("solid", "menu"),
    absoluteRegistryItemUrl("solid", "separator"),
  ],
};

export default manifest;
