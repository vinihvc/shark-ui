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
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      solid: ["bg-primary", "text-primary-foreground", "hover:bg-primary/90"],
      outline: [
        "bg-background",
        "border shadow-xs",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      ],
      success: ["bg-success", "text-success-foreground", "hover:bg-success/90"],
      info: ["bg-info", "text-info-foreground", "hover:bg-info/90"],
      warning: ["bg-warning", "text-warning-foreground", "hover:bg-warning/90"],
      destructive: [
        "bg-destructive",
        "text-destructive-foreground",
        "hover:bg-destructive/90",
        "focus-visible:ring-destructive/20",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "hover:bg-secondary/80",
      ],
      ghost: ["hover:bg-accent hover:text-accent-foreground"],
      link: ["text-primary", "underline-offset-4", "hover:underline"],
    },
    size: {
      sm: ["h-8", "gap-1.5", "rounded-md", "px-3", "has-[>svg]:px-2.5"],
      md: ["h-9", "px-4", "py-2", "has-[>svg]:px-3"],
      lg: ["h-10", "rounded-md", "px-6", "has-[>svg]:px-4"],
      "icon-sm": "size-8",
      "icon-md": "size-9",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ComponentProps<typeof ark.button>,
    VariantProps<typeof buttonVariants> {
  /**
   * Show a loading indicator
   *
   * @default false
   */
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    isLoading,
    type = "button",
    variant,
    size,
    className,
    children,
    ...rest
  } = props;

  return (
    <ark.button
      className={cn(buttonVariants({ variant, size }), className)}
      data-slot="button"
      data-state={isLoading ? "loading" : "idle"}
      type={type}
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
