import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  theme: {
    "--animate-collapse": "collapse 0.2s ease-out",
    "--animate-expand": "expand 0.2s ease-out",
  },
};

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
  cssVars,
  dependencies,
  name: "collapsible",
  type: "registry:ui",
};

export default manifest;
