import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  light: {
    "destructive-foreground": "var(--color-red-50)",
    success: "var(--color-emerald-600)",
    "success-foreground": "var(--color-green-50)",
    info: "var(--color-sky-600)",
    "info-foreground": "var(--color-sky-50)",
    warning: "var(--color-yellow-400)",
    "warning-foreground": "var(--color-yellow-950)",
  },
  dark: {
    "destructive-foreground": "var(--color-red-50)",
    success: "var(--color-emerald-600)",
    "success-foreground": "var(--color-green-50)",
    info: "var(--color-sky-600)",
    "info-foreground": "var(--color-sky-50)",
    warning: "var(--color-yellow-600)",
    "warning-foreground": "var(--color-yellow-50)",
  },
};

const manifest: RegistryItemType = {
  name: "badge",
  type: "registry:ui",
  dependencies,
  cssVars,
};

export default manifest;
