import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "lucide-react"];

const cssVars = {
  theme: {
    "--animate-slide-down": "slideDown 0.2s ease-out",
    "--animate-slide-up": "slideUp 0.2s ease-out",
  },
};

const css = {
  "@keyframes slideDown": {
    from: { height: "0" },
    to: { height: "var(--height)" },
  },
  "@keyframes slideUp": {
    from: { height: "var(--height)" },
    to: { height: "0" },
  },
};

const manifest: RegistryItemType = {
  css,
  cssVars,
  dependencies,
  name: "accordion",
  type: "registry:ui",
};

export default manifest;
