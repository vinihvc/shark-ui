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
        "border border-transparent",
        "text-primary-foreground",
        "hover:bg-primary/90",
        "focus-visible:border-background focus-visible:ring-ring/50",
      ],
      outline: [
        "bg-transparent",
        "border shadow-xs",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:bg-input/32 dark:hover:bg-input/64",
        "focus-visible:border-ring focus-visible:ring-ring/50",
      ],
      destructive: [
        "bg-destructive",
        "text-white",
        "hover:bg-destructive/90",
        "focus-visible:border-destructive-foreground focus-visible:ring-destructive-foreground/32",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "focus-visible:border-foreground focus-visible:ring-foreground/30",
        "hover:bg-secondary/80",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-foreground",
        "border border-transparent",
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
      xs: [
        "h-6",
        "gap-1.5",
        "px-3",
        "rounded-[calc(var(--radius-md)-4px)]",
        "has-[>svg]:px-2.5",
        "[&_svg:not([class*='size-'])]:size-3",
      ],
      sm: [
        "h-7",
        "px-3",
        "gap-1.5",
        "has-[>svg]:px-2.5",
        "[&_svg:not([class*='size-'])]:size-3.5",
      ],
      md: ["h-8", "px-3", "py-2", "has-[>svg]:px-2"],
      lg: ["h-9", "px-4", "has-[>svg]:px-3"],
      xl: ["h-10", "text-base", "px-5", "has-[>svg]:px-4"],
      "icon-xs": "size-6 rounded-[calc(var(--radius-md)-4px)]",
      "icon-sm": "size-7",
      "icon-md": "size-8",
      "icon-lg": "size-9",
      "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-5",
    },
    clickEffect: {
      true: "active:translate-y-px",
      false: "",
    },
    pill: {
      true: "rounded-full",
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
    variant,
    size,
    clickEffect = true,
    pill,
    isLoading,
    className,
    children,
    ...rest
  } = props;

  return (
    <ark.button
      className={cn(
        buttonVariants({ variant, size, clickEffect, pill }),
        className
      )}
      data-size={size}
      data-slot="button"
      data-state={isLoading ? "loading" : "idle"}
      data-variant={variant}
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
