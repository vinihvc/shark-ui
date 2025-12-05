import { ark } from "@ark-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-1",
    "px-1 py-0.5",
    "rounded-md border",
    "select-none font-medium text-xs",
    "overflow-hidden",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
  ],
  variants: {
    variant: {
      primary: [
        "bg-primary",
        "text-primary-foreground",
        "focus-visible:border-primary focus-visible:ring-primary/20",
        "dark:focus-visible:ring-primary/40",
        "[a&]:hover:bg-primary/90",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "focus-visible:border-secondary focus-visible:ring-secondary/20",
        "dark:focus-visible:ring-secondary/40",
        "[a&]:hover:bg-secondary/90",
      ],
      outline: ["[a&]:hover:bg-accent", "[a&]:hover:text-accent-foreground"],
      success: [
        "bg-success",
        "text-success-foreground",
        "focus-visible:border-success focus-visible:ring-success/20",
        "dark:focus-visible:ring-success/40",
        "[a&]:hover:bg-success/90",
      ],
      info: [
        "bg-info",
        "text-info-foreground",
        "focus-visible:border-info focus-visible:ring-info/20",
        "dark:focus-visible:ring-info/40",
        "[a&]:hover:bg-info/90",
      ],
      warning: [
        "bg-warning",
        "text-warning-foreground",
        "focus-visible:border-warning focus-visible:ring-warning/20",
        "dark:focus-visible:ring-warning/40",
        "[a&]:hover:bg-warning/90",
      ],
      destructive: [
        "bg-destructive dark:bg-destructive/60",
        "text-destructive-foreground",
        "focus-visible:border-destructive focus-visible:ring-destructive/20",
        "dark:focus-visible:ring-destructive/40",
        "[a&]:hover:bg-destructive/90",
      ],
    },
  },
});

interface BadgeProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const { variant = "primary", className, ...rest } = props;

  return (
    <ark.span
      className={cn(badgeVariants({ variant }), className)}
      data-part="root"
      data-scope="badge"
      {...rest}
    />
  );
};
