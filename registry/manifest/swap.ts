import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react", "tailwind-variants"];

const cssVars = {
  theme: {
    "--animate-flip-in": "flip-in 0.2s ease-out",
    "--animate-flip-out": "flip-out 0.2s ease-out",
  },
};

const css = {
  "@keyframes flip-in": {
    from: { transform: "rotateY(180deg)" },
    to: { transform: "rotateY(0deg)" },
  },
  "@keyframes flip-out": {
    from: { transform: "rotateY(0deg)" },
    to: { transform: "rotateY(180deg)" },
  },
};

const manifest: RegistryItemType = {
  css,
  cssVars,
  dependencies,
  name: "swap",
  type: "registry:ui",
};

export default manifest;
