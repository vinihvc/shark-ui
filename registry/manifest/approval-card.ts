import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description:
    "Human-in-the-loop card for clarifying questions, commands, or plans.",
  name: "approval-card",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/input.json"),
    absoluteUrl("/r/kbd.json"),
  ],
  type: "registry:ui",
};

export default manifest;
