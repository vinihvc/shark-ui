import type { RegistryItemType } from "@/lib/registry";
import { absoluteRegistryItemUrl } from "@/lib/url";

const dependencies = ["@ark-ui/solid", "tailwind-variants"];

const css = {
  "@keyframes indeterminate": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(400%)",
    },
  },
};

const cssVars = {
  theme: {
    "--animate-indeterminate": "indeterminate 1.5s ease-in-out infinite",
  },
  light: {
    success: "var(--color-emerald-600)",
    "success-foreground": "var(--color-green-50)",
    info: "var(--color-sky-600)",
    "info-foreground": "var(--color-sky-50)",
    warning: "var(--color-yellow-400)",
    "warning-foreground": "var(--color-yellow-950)",
  },
  dark: {
    success: "var(--color-emerald-600)",
    "success-foreground": "var(--color-green-50)",
    info: "var(--color-sky-600)",
    "info-foreground": "var(--color-sky-50)",
    warning: "var(--color-yellow-600)",
    "warning-foreground": "var(--color-yellow-50)",
  },
};

const manifest: RegistryItemType = {
  name: "progress",
  type: "registry:ui",
  dependencies,
  cssVars,
  css,
  registryDependencies: [absoluteRegistryItemUrl("solid", "field")],
};

export default manifest;
