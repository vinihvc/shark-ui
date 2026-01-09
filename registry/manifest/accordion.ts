import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  theme: {
    "--animate-slide-up": "slideUp 0.2s ease-out",
    "--animate-slide-down": "slideDown 0.2s ease-out",
  },
};

const css = {
  "@keyframes slideUp": {
    from: {
      height: "var(--height)",
    },
    to: {
      height: "0",
    },
  },
  "@keyframes slideDown": {
    from: {
      height: "0",
    },
    to: {
      height: "var(--height)",
    },
  },
};

const manifest: RegistryItemType = {
  name: "accordion",
  type: "registry:ui",
  dependencies,
  cssVars,
  css,
};

export default manifest;
