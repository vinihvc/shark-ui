import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "context-menu",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/menu.json")],
};

export default manifest;
