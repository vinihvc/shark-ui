import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "Conversation row with avatar, alignment, header, content, footer, and actions.",
  name: "message",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/tooltip.json"),
  ],
  type: "registry:ui",
};

export default manifest;
