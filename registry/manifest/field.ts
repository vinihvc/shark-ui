import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "field",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/separator.json")],
};

export default manifest;
