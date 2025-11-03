import type * as React from "react";
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
      solid: ["bg-card", "text-card-foreground"],
      outline: ["border-border", "bg-background", "text-foreground"],
      destructive: [
        "border-destructive/50",
        "text-destructive",
        "dark:border-destructive",
        "[&>svg]:text-destructive",
        "*:data-[part=alert-description]:text-destructive/90",
      ],
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

interface AlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

export const Alert = (props: AlertProps) => {
  const { variant, className, ...rest } = props;

  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-part="root"
      data-scope="alert"
      {...rest}
    />
  );
};

export const AlertTitle = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      data-part="alert-title"
      data-scope="alert"
      {...rest}
    />
  );
};

export const AlertDescription = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
        className
      )}
      data-part="alert-description"
      data-scope="alert"
      {...rest}
    />
  );
};
