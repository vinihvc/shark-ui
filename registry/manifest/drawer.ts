import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "drawer",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
