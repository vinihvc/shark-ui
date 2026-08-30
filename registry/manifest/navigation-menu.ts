import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react@^5.39.1"],
  name: "navigation-menu",
  registryDependencies: [absoluteUrl("/r/utils.json")],
  type: "registry:ui",
};

export default manifest;
