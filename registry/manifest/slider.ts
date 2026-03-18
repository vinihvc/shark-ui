import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "slider",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/field.json")],
};

export default manifest;
