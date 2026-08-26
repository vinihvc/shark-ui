import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description:
    "Chat composer with textarea, tool slots, attach, and send or stop.",
  name: "prompt-input",
  registryDependencies: [
    absoluteUrl("/r/input-group.json"),
    absoluteUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
