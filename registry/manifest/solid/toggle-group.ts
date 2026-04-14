import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid"];

const manifest: RegistryItemType = {
  name: "toggle-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteRegistryItemUrl("solid", "toggle")],
};

export default manifest;
