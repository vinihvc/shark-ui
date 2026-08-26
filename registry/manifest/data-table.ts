import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@tanstack/react-table", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  name: "data-table",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/menu.json"),
    absoluteUrl("/r/native-select.json"),
    absoluteUrl("/r/pagination.json"),
    absoluteUrl("/r/table.json"),
  ],
  type: "registry:ui",
};

export default manifest;
