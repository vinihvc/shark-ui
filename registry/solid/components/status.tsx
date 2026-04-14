import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const statusVariants = tv({
  base: [
    "shrink-0 rounded-full",
    "flex items-center justify-center",
    "font-medium text-[10px]",
    "ring-2 ring-background",
  ],
  variants: {
    variant: {
      default: "bg-foreground text-background",
      success: "bg-success text-white",
      info: "bg-info text-white",
      warning: "bg-warning text-white",
      destructive: "bg-destructive text-white dark:bg-destructive-foreground",
    },
    size: {
      sm: "size-2 [&_svg:not([class*='size-'])]:size-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      md: "size-2.5 [&_svg:not([class*='size-'])]:size-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      lg: "size-3 [&_svg:not([class*='size-'])]:size-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface StatusProps
  extends ComponentProps<typeof ark.span>,
    VariantProps<typeof statusVariants> {}

export const Status = (props: StatusProps) => {
  const { variant, size, className, ...rest } = props;

  return (
    <ark.span
      class={cn(statusVariants({ variant, size }), className)}
      data-size={size}
      data-slot="status-indicator"
      {...rest}
    />
  );
};
