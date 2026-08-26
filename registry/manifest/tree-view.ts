import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "lucide-react", "tailwind-variants"];

const css = {
  "@keyframes collapse": {
    from: { height: "var(--height)" },
    to: { height: "var(--collapsed-height, 0)" },
  },
  "@keyframes expand": {
    from: { height: "var(--collapsed-height, 0)" },
    to: { height: "var(--height)" },
  },
};

const manifest: RegistryItemType = {
  css,
  dependencies,
  name: "tree-view",
  registryDependencies: [absoluteUrl("/r/checkbox.json")],
  type: "registry:ui",
};

export default manifest;
