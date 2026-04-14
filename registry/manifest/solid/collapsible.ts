import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const cssVars = {
  theme: {
    "--animate-expand": "expand 0.2s ease-out",
    "--animate-collapse": "collapse 0.2s ease-out",
  },
};

const css = {
  "@keyframes expand": {
    from: {
      height: "var(--collapsed-height, 0)",
    },
    to: {
      height: "var(--height)",
    },
  },
  "@keyframes collapse": {
    from: {
      height: "var(--height)",
    },
    to: {
      height: "var(--collapsed-height, 0)",
    },
  },
};

const manifest: RegistryItemType = {
  name: "collapsible",
  type: "registry:ui",
  dependencies,
  cssVars,
  css,
};

export default manifest;
