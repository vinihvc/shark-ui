import { ark } from "@ark-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-1",
    "select-none font-medium",
    "rounded-md border border-transparent",
    "overflow-hidden",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0 [button,a&]:cursor-pointer",
  ],
  variants: {
    variant: {
      solid: [
        "bg-foreground",
        "text-background",
        "focus-visible:border-foreground focus-visible:ring-foreground/20",
        "dark:focus-visible:ring-foreground/40",
        "[a&]:hover:bg-foreground/90",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "border-secondary/20",
        "focus-visible:border-foreground focus-visible:ring-foreground/50",
        "[a&]:hover:bg-secondary/90",
      ],
      outline: [
        "border-border",
        "[a&]:hover:bg-accent",
        "[a&]:hover:text-accent-foreground",
      ],
      success: [
        "bg-success/10",
        "text-success",
        "border-success/20",
        "focus-visible:border-success focus-visible:ring-success/20",
        "[a&]:hover:bg-success/20",
      ],
      info: [
        "bg-info/10",
        "text-info",
        "border-info/20",
        "focus-visible:border-info focus-visible:ring-info/50",
        "[a&]:hover:bg-info/20",
      ],
      warning: [
        "bg-warning/10",
        "text-warning",
        "border-warning/20",
        "focus-visible:border-warning focus-visible:ring-warning/20",
        "dark:focus-visible:ring-warning/40",
        "[a&]:hover:bg-warning/20",
      ],
      destructive: [
        "bg-destructive/10 dark:bg-destructive/5",
        "text-destructive-foreground",
        "border-destructive-foreground/20",
        "focus-visible:border-destructive focus-visible:ring-destructive/20",
        "dark:focus-visible:ring-destructive/40",
        "[a&]:hover:bg-destructive/20",
      ],
    },
    size: {
      sm: [
        "h-5 min-w-5 sm:h-4 sm:min-w-4",
        "px-1",
        "text-xs sm:text-[.625rem]",
      ],
      md: [
        "h-5.5 min-w-5.5 sm:h-4.5 sm:min-w-4.5",
        "px-1.5",
        "text-sm sm:text-xs",
      ],
      lg: [
        "h-6.5 min-w-6.5 sm:h-5.5 sm:min-w-5.5",
        "px-2",
        "text-base sm:text-sm",
        "[&_svg]:size-3.5",
      ],
    },
    pill: {
      true: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    pill: false,
  },
});

interface BadgeProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const {
    variant = "solid",
    size = "md",
    pill = false,
    className,
    ...rest
  } = props;

  return (
    <ark.span
      className={cn(badgeVariants({ variant, size, pill }), className)}
      data-slot="badge"
      {...rest}
    />
  );
};
