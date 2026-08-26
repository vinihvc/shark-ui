import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description: "Microphone button for Web Speech API voice transcription.",
  name: "speech-input",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/spinner.json"),
    absoluteUrl("/r/tooltip.json"),
  ],
  type: "registry:ui",
};

export default manifest;
