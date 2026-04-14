import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const manifest: RegistryItemType = {
  name: "clipboard",
  type: "registry:ui",
  dependencies,
  registryDependencies: [absoluteRegistryItemUrl("solid", "input")],
};

export default manifest;
