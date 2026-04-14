import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "toggle-tooltip",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/popover.json")],
};

export default manifest;
