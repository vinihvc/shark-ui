import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "breadcrumb",
  type: "registry:ui",
  dependencies,
};

export default manifest;
