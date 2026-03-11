import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  name: "input-group",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/textarea.json"),
  ],
};

export default manifest;
