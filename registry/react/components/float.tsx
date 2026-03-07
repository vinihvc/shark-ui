"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const floatVariants = tv({
  base: ["absolute z-10"],
  variants: {
    placement: {
      "top-start": "-translate-1/2 inset-s-0 top-0",
      "top-center": "-translate-1/2 top-0 left-1/2",
      "top-end": "inset-e-0 top-0 translate-x-1/2 -translate-y-1/2",
      "middle-start": "-translate-1/2 inset-s-0 top-1/2",
      "middle-center": "-translate-1/2 top-1/2 left-1/2",
      "middle-end": "inset-e-0 top-1/2 translate-x-1/2 -translate-y-1/2",
      "bottom-start": "inset-s-0 bottom-0 -translate-x-1/2 translate-y-1/2",
      "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
      "bottom-end": "inset-e-0 bottom-0 translate-x-1/2 translate-y-1/2",
    },
  },
  defaultVariants: {
    placement: "top-end",
  },
});

interface FloatProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof floatVariants> {}

export const Float = (props: FloatProps) => {
  const { placement = "top-end", className, ...rest } = props;

  return (
    <ark.div
      className={cn(floatVariants({ placement }), className)}
      data-placement={placement}
      data-slot="float"
      {...rest}
    />
  );
};
