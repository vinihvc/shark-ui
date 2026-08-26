import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "bottom-navigation",
  registryDependencies: [absoluteUrl("/r/tabs.json")],
  type: "registry:ui",
};

export default manifest;
