import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid"];

const manifest: RegistryItemType = {
  name: "input-otp",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteRegistryItemUrl("solid", "input")],
};

export default manifest;
