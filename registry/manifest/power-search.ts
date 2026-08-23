import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

export const powerSearch: RegistryItemType = {
  name: "power-search",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/autocomplete.json"),
    absoluteUrl("/r/badge.json"),
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/date-input.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/input-group.json"),
    absoluteUrl("/r/number-input.json"),
    absoluteUrl("/r/popover.json"),
    absoluteUrl("/r/select.json"),
    absoluteUrl("/r/tags-input.json"),
  ],
};

export default powerSearch;
