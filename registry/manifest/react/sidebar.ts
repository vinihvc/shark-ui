import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const manifest: RegistryItemType = {
  name: "sidebar",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/scroll-area.json"),
    absoluteUrl("/r/separator.json"),
    absoluteUrl("/r/sheet.json"),
    absoluteUrl("/r/skeleton.json"),
    absoluteUrl("/r/tooltip.json"),
    absoluteUrl("/r/use-is-mobile.json"),
  ],
};

export default manifest;
