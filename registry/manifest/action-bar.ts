import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "action-bar",
  registryDependencies: [
    absoluteUrl("/r/badge.json"),
    absoluteUrl("/r/separator.json"),
  ],
  type: "registry:ui",
};

export default manifest;
