import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "date-fns", "lucide-react"];

const manifest: RegistryItemType = {
  name: "calendar",
  type: "registry:ui",
  dependencies,
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/input.json"),
  ],
};

export default manifest;
