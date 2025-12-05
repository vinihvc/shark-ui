import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  light: {
    success: "oklch(0.596 0.145 163.225)",
    "success-foreground": "oklch(1 0 0)",
    info: "oklch(0.685 0.169 237.323 / 0.15)",
    "info-foreground": "oklch(0.5 0.134 242.749)",
    warning: "oklch(0.828 0.189 84.429)",
    "warning-foreground": "oklch(0.279 0.077 45.635)",
  },
  dark: {
    success: "oklch(0.596 0.145 163.225)",
    "success-foreground": "oklch(1 0 0)",
    info: "oklch(0.685 0.169 237.323 / 0.1)",
    "info-foreground": "oklch(0.828 0.111 230.318)",
    warning: "oklch(0.828 0.189 84.429)",
    "warning-foreground": "oklch(0.279 0.077 45.635)",
  },
};

const manifest: RegistryItemType = {
  name: "badge",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
