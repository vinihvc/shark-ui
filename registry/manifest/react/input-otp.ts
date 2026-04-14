import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  name: "input-otp",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteUrl("/r/input.json")],
};

export default manifest;
