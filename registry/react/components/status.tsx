import { ark } from "@ark-ui/react/factory";
import type React from "react";
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
      success: "bg-success text-success-foreground",
      info: "bg-info text-info-foreground",
      warning: "bg-warning text-warning-foreground",
      destructive:
        "bg-destructive text-destructive-foreground dark:bg-destructive-foreground",
    },
    size: {
      sm: "size-2",
      md: "size-2.5",
      lg: "size-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface StatusProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof statusVariants> {}

export const Status = (props: StatusProps) => {
  const { variant, size, className, ...rest } = props;

  return (
    <ark.span
      className={cn(statusVariants({ variant, size }), className)}
      data-size={size}
      data-slot="status-indicator"
      {...rest}
    />
  );
};
