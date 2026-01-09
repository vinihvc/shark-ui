import { ark } from "@ark-ui/react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

export const buttonVariants = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center gap-2",
    "whitespace-nowrap font-medium text-sm",
    "rounded-md",
    "transition-all",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px]",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      solid: [
        "bg-primary",
        "text-primary-foreground",
        "hover:bg-primary/90",
        "focus-visible:ring-ring/50",
      ],
      outline: [
        "bg-background",
        "border shadow-xs",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:border-input dark:bg-input/60 dark:hover:bg-input/70",
        "focus-visible:border-foreground focus-visible:ring-foreground/10",
      ],
      success: [
        "bg-success",
        "text-success-foreground",
        "focus-visible:ring-success/50",
        "hover:bg-success/90",
      ],
      info: [
        "bg-info",
        "text-info-foreground",
        "focus-visible:ring-info/50",
        "hover:bg-info/90",
      ],
      warning: [
        "bg-warning",
        "text-warning-foreground",
        "focus-visible:ring-warning/50",
        "hover:bg-warning/90",
      ],
      destructive: [
        "bg-destructive",
        "text-destructive-foreground",
        "hover:bg-destructive/90",
        "focus-visible:ring-destructive/50",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "focus-visible:border-foreground focus-visible:ring-foreground/30",
        "hover:bg-secondary/80",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:border-foreground focus-visible:ring-foreground/30",
      ],
      link: [
        "text-primary",
        "underline-offset-4",
        "hover:underline",
        "focus-visible:border-primary focus-visible:ring-primary/40",
      ],
    },
    size: {
      sm: ["h-8", "gap-1.5", "rounded-md", "px-3", "has-[>svg]:px-2.5"],
      md: ["h-9", "px-4", "py-2", "has-[>svg]:px-3"],
      lg: ["h-10", "rounded-md", "px-6", "has-[>svg]:px-4"],
      "icon-sm": "size-8",
      "icon-md": "size-9",
      "icon-lg": "size-10",
    },
    clickEffect: {
      true: "active:translate-y-px",
      false: "",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    clickEffect: true,
  },
});

export interface ButtonProps
  extends React.ComponentProps<typeof ark.button>,
    VariantProps<typeof buttonVariants> {
  /**
   * Apply a click effect to the button
   *
   * @default true
   */
  clickEffect?: boolean;
  /**
   * Show a loading indicator
   *
   * @default false
   */
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    clickEffect = true,
    isLoading,
    variant,
    size,
    className,
    children,
    ...rest
  } = props;

  return (
    <ark.button
      className={cn(buttonVariants({ variant, size, clickEffect }), className)}
      data-slot="button"
      data-state={isLoading ? "loading" : "idle"}
      type="button"
      {...rest}
    >
      {isLoading ? (
        <>
          <span aria-hidden className="invisible contents">
            {children}
          </span>

          <span className="sr-only">{children}</span>

          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </span>
        </>
      ) : (
        children
      )}
    </ark.button>
  );
};
