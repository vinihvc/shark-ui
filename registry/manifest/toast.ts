import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const dependencies = ["@ark-ui/react", "tailwind-variants", "lucide-react"];

const cssVars = {
  dark: {
    "destructive-foreground": "var(--color-red-400)",
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-400)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-400)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-400)",
  },
  light: {
    "destructive-foreground": "var(--color-red-700)",
    info: "var(--color-blue-500)",
    "info-foreground": "var(--color-blue-700)",
    success: "var(--color-emerald-500)",
    "success-foreground": "var(--color-emerald-700)",
    warning: "var(--color-amber-500)",
    "warning-foreground": "var(--color-amber-700)",
  },
};

const manifest: RegistryItemType = {
  cssVars,
  dependencies,
  name: "toast",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/spinner.json"),
  ],
  type: "registry:ui",
};

export default manifest;
