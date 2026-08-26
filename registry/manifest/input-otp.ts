import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "input-otp",
  registryDependencies: [absoluteUrl("/r/input.json")],
  type: "registry:ui",
};

export default manifest;
