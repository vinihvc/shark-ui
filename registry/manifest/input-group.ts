import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  name: "input-group",
  registryDependencies: [
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/textarea.json"),
  ],
  type: "registry:ui",
};

export default manifest;
