import type { RegistryItemType } from "@/lib/registry";

const dependencies = ["@ark-ui/solid", "lucide-solid"];

const css = {
  "@keyframes flip-in": {
    from: {
      transform: "rotateY(180deg)",
    },
    to: {
      transform: "rotateY(0deg)",
    },
  },
  "@keyframes flip-out": {
    from: {
      transform: "rotateY(0deg)",
    },
    to: {
      transform: "rotateY(180deg)",
    },
  },
};

const manifest: RegistryItemType = {
  name: "swap",
  type: "registry:ui",
  dependencies,
  css,
};

export default manifest;
