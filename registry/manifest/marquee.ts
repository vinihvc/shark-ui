import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/react"];

const cssVars = {
  theme: {
    "--animate-marquee-x":
      "marqueeX var(--marquee-duration) linear infinite var(--marquee-delay)",
    "--animate-marquee-y":
      "marqueeY var(--marquee-duration) linear infinite var(--marquee-delay)",
  },
};

const css = {
  "@keyframes marqueeX": {
    from: {
      transform: "translateX(0)",
    },
    to: {
      transform: "translateX(var(--marquee-translate))",
    },
  },
  "@keyframes marqueeY": {
    from: {
      transform: "translateY(0)",
    },
    to: {
      transform: "translateY(var(--marquee-translate))",
    },
  },
};

const manifest: RegistryItemType = {
  name: "marquee",
  type: "registry:ui",
  dependencies,
  cssVars,
  css,
};

export default manifest;
