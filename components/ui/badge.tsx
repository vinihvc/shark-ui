import { Slot } from "@radix-ui/react-slot";
import { cn } from "fumadocs-ui/utils/cn";
import type * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: [
    "w-fit",
    "inline-flex shrink-0 items-center justify-center gap-1",
    "px-2 py-0.5",
    "rounded-md border",
    "whitespace-nowrap font-medium text-xs",
    "overflow-hidden outline-none",
    "transition-[color,box-shadow]",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
  ],
  variants: {
    variant: {
      default: [
        "border-transparent",
        "bg-primary",
        "text-primary-foreground",
        "[a&]:hover:bg-primary/90",
      ],
      secondary: [
        "border-transparent",
        "bg-secondary",
        "text-secondary-foreground",
        "[a&]:hover:bg-secondary/90",
      ],
      destructive: [
        "border-transparent",
        "bg-destructive",
        "text-white",
        "focus-visible:ring-destructive/20",
        "dark:bg-destructive/60",
        "dark:focus-visible:ring-destructive/40",
        "[a&]:hover:bg-destructive/90",
      ],
      outline: [
        "text-foreground",
        "[a&]:hover:bg-accent",
        "[a&]:hover:text-accent-foreground",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * If `true`, the badge will render the child as a slot.
   *
   * @default false
   */
  asChild?: boolean;
}

export const Badge = (props: BadgeProps) => {
  const { asChild, variant, className, ...rest } = props;

  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      data-slot="badge"
      {...rest}
    />
  );
};
