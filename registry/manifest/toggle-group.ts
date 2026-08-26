import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "toggle-group",
  registryDependencies: [absoluteUrl("/r/toggle.json")],
  type: "registry:ui",
};

export default manifest;
