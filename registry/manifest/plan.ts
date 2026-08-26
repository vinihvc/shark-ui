import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react"],
  description: "Collapsible agent plan with title, description, and tasks.",
  name: "plan",
  registryDependencies: [absoluteUrl("/r/collapsible.json")],
  type: "registry:ui",
};

export default manifest;
