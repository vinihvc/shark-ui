import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: [],
  description: "Connect a simulated chat to AI SDK or TanStack AI useChat.",
  name: "use-chat-simulator",
  registryDependencies: [absoluteUrl("/r/chat-simulator.json")],
  type: "registry:item",
};

export default manifest;
