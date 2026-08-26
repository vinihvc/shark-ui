import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: [],
  description: "Starter prompt chips for empty chat states.",
  name: "suggestion",
  registryDependencies: [absoluteUrl("/r/button.json")],
  type: "registry:ui",
};

export default manifest;
