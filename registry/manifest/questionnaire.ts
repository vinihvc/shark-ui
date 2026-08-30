import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description:
    "A composable questionnaire with single, multiple, freeform, and optional answers.",
  name: "questionnaire",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/checkbox.json"),
    absoluteUrl("/r/field.json"),
    absoluteUrl("/r/hotkeys.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/kbd.json"),
    absoluteUrl("/r/radio-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
