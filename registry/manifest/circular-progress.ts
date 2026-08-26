import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "circular-progress",
  registryDependencies: [absoluteUrl("/r/field.json")],
  type: "registry:ui",
};

export default manifest;
