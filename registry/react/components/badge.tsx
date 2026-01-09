import { ark } from "@ark-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-1",
    "rounded-md border border-transparent",
    "select-none font-medium",
    "overflow-hidden",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
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
        "focus-visible:border-secondary focus-visible:ring-secondary/50",
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
        "focus-visible:border-success focus-visible:ring-success/20",
        "[a&]:hover:bg-success/20",
      ],
      info: [
        "bg-info/10",
        "text-info",
        "focus-visible:border-info focus-visible:ring-info/50",
        "[a&]:hover:bg-info/20",
      ],
      warning: [
        "bg-warning/10",
        "text-warning",
        "focus-visible:border-warning focus-visible:ring-warning/20",
        "dark:focus-visible:ring-warning/40",
        "[a&]:hover:bg-warning/20",
      ],
      destructive: [
        "bg-destructive/10 dark:bg-destructive/5",
        "text-destructive",
        "focus-visible:border-destructive focus-visible:ring-destructive/20",
        "dark:focus-visible:ring-destructive/40",
        "[a&]:hover:bg-destructive/20",
      ],
    },
    size: {
      sm: ["text-[0.625rem] leading-none", "px-1 py-px"],
      md: ["text-xs", "px-2 py-0.5"],
      lg: ["text-sm", "px-3 py-1", "[&>svg]:size-4"],
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

interface BadgeProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const { variant = "solid", size = "md", className, ...rest } = props;

  return (
    <ark.span
      className={cn(badgeVariants({ variant, size }), className)}
      data-slot="badge"
      {...rest}
    />
  );
};
