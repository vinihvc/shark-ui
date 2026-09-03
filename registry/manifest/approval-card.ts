import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  description: "A composable card for approval flows.",
  name: "approval-card",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/card.json"),
    absoluteUrl("/r/questionnaire.json"),
  ],
  type: "registry:ui",
};

export default manifest;
