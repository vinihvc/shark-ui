import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "date-picker",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/calendar.json"),
    absoluteUrl("/r/field.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/input-group.json"),
  ],
  type: "registry:ui",
};

export default manifest;
