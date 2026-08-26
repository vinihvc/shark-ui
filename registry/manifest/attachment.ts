import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "File and image attachment card with upload state, actions, and a full-card trigger.",
  name: "attachment",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/shimmer.json"),
  ],
  type: "registry:ui",
};

export default manifest;
