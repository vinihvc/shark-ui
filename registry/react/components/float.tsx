import { ark } from "@ark-ui/react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const placementMap = {
  "top-start": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-end": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "middle-start": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  "middle-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "middle-end": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-start": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "bottom-end": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
} as const;

const floatVariants = tv({
  base: ["absolute", "z-10"],
  variants: {
    placement: placementMap,
  },
  defaultVariants: {
    placement: "top-end",
  },
});

interface FloatProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof floatVariants> {}

export const Float = (props: FloatProps) => {
  const { placement = "top-end", className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(floatVariants({ placement }), className)}
      data-placement={placement}
      data-slot="float"
      {...rest}
    >
      {children}
    </ark.div>
  );
};
