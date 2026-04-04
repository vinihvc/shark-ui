import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "avatar",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/status.json")],
};

export default manifest;
