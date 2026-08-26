import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "sidebar",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/hotkeys.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/scroll-area.json"),
    absoluteUrl("/r/separator.json"),
    absoluteUrl("/r/sheet.json"),
    absoluteUrl("/r/skeleton.json"),
    absoluteUrl("/r/tooltip.json"),
    absoluteUrl("/r/use-is-mobile.json"),
  ],
  type: "registry:ui",
};

export default manifest;
