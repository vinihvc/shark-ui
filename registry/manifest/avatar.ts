import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "avatar",
  registryDependencies: [absoluteUrl("/r/status.json")],
  type: "registry:ui",
};

export default manifest;
