import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "radio-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteRegistryItemUrl("solid", "field")],
};

export default manifest;
