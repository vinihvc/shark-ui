import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react"];

const manifest: RegistryItemType = {
  dependencies,
  description:
    "Conversation scroll container with jump-to-start and jump-to-end controls.",
  name: "message-scroller",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/scroll-area.json"),
  ],
  type: "registry:ui",
};

export default manifest;
