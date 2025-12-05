import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  name: "datepicker",
  type: "registry:ui",
  dependencies,
  registryDependencies: ["button", "input"],
};

export default manifest;
