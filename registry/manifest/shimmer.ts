import type { RegistryItemType } from "@/lib/registry";

const css = {
  "@media (prefers-reduced-motion: reduce)": {
    ".shimmer": {
      "-webkit-text-fill-color": "currentColor",
      animation: "none",
      "background-image": "none",
    },
  },
  "@property --shimmer-angle": {
    inherits: "true",
    "initial-value": "20deg",
    syntax: '"<angle>"',
  },
  "@property --shimmer-image": {
    inherits: "false",
    syntax: '"*"',
  },
  "@property --shimmer-text-fill": {
    inherits: "false",
    syntax: '"*"',
  },
  "@theme inline": {
    "@keyframes tw-shimmer": {
      from: { "background-position": "100% 0" },
      to: { "background-position": "0 0" },
    },
  },
  "@utility shimmer": {
    "--_base": "currentColor",
    "--_highlight":
      "var(--shimmer-color, oklch(from currentColor l c h / calc(alpha * 0.2)))",
    "--_spread": "var(--shimmer-spread, calc(3ch + 40px))",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "var(--shimmer-text-fill, transparent)",
    "@variant dark": {
      "--_highlight":
        "var(--shimmer-color, oklch(from currentColor l c h / calc(alpha * 0.45)))",
    },
    '&:where([dir="rtl"], [dir="rtl"] *)': {
      "animation-direction": "reverse",
    },
    animation: "tw-shimmer var(--shimmer-duration, 2s) linear infinite",
    "background-clip": "text",
    "background-image":
      "var(--shimmer-image, linear-gradient(calc(90deg + var(--shimmer-angle)), var(--_base) calc(50% - var(--_spread)), color-mix(in oklch, var(--_highlight), var(--_base) 50%) calc(50% - var(--_spread) * 0.5), var(--_highlight) 50%, color-mix(in oklch, var(--_highlight), var(--_base) 50%) calc(50% + var(--_spread) * 0.5), var(--_base) calc(50% + var(--_spread))))",
    "background-position": "0 0",
    "background-repeat": "no-repeat",
    "background-size": "calc(200% + var(--_spread) * 2) 100%",
  },
  "@utility shimmer-angle-*": {
    "--shimmer-angle": "calc(--value(integer) * 1deg)",
  },
  "@utility shimmer-color-*": {
    "--shimmer-color": "--value(--color, [color])",
  },
  "@utility shimmer-duration-*": {
    "--shimmer-duration": "calc(--value(integer) * 1ms)",
  },
  "@utility shimmer-none": {
    "--shimmer-image": "none",
    "--shimmer-text-fill": "currentColor",
  },
  "@utility shimmer-once": {
    "animation-iteration-count": "1",
  },
  "@utility shimmer-reverse": {
    "animation-direction": "reverse",
  },
  "@utility shimmer-spread-*": {
    "--shimmer-spread": "calc(var(--spacing) * --value(integer))",
  },
};

const manifest: RegistryItemType = {
  css,
  dependencies: [],
  description: "Text shimmer for live status such as thinking or uploading.",
  name: "shimmer",
  type: "registry:style",
};

export default manifest;
