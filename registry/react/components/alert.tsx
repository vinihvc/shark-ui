import { ark } from "@ark-ui/react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const alertVariants = tv({
  base: [
    "relative",
    "w-full",
    "px-4 py-3",
    "grid grid-cols-[0_1fr] items-start gap-y-0.5",
    "text-sm",
    "rounded-lg border",
    "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3",
    "[&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  ],
  variants: {
    variant: {
      solid: [
        "bg-card",
        "text-card-foreground",
        "*:data-[slot=alert-description]:text-card-foreground/80",
      ],
      destructive: [
        "bg-destructive/5",
        "text-destructive",
        "border-destructive",
        "*:data-[slot=alert-description]:text-destructive/90",
      ],
      info: [
        "bg-info/5",
        "text-info",
        "border-info",
        "*:data-[slot=alert-description]:text-info/80",
      ],
      warning: [
        "bg-warning/10",
        "text-warning-foreground dark:text-foreground",
        "border-warning",
        "*:data-[slot=alert-description]:text-warning-foreground/80",
      ],
      success: [
        "bg-success/5",
        "text-success",
        "border-success",
        "*:data-[slot=alert-description]:text-success/80",
      ],
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

interface AlertProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof alertVariants> {}

export const Alert = (props: AlertProps) => {
  const { variant, className, ...rest } = props;

  return (
    <ark.div
      className={cn(alertVariants({ variant }), className)}
      data-slot="alert"
      {...rest}
    />
  );
};

export const AlertTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      data-slot="alert-title"
      {...rest}
    />
  );
};

export const AlertDescription = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      data-slot="alert-description"
      {...rest}
    />
  );
};
