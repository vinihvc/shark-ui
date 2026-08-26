import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "Inline approve or reject card for a destructive tool call.",
  name: "confirmation",
  registryDependencies: [absoluteUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
