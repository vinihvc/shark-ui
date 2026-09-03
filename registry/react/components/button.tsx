import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Spinner } from "@/registry/react/components/spinner";

export const buttonVariants = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center gap-2",
    "whitespace-nowrap font-medium text-sm",
    "rounded-lg bg-clip-padding",
    "transition-all",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "disabled:pointer-events-none disabled:opacity-64",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "aria-disabled:pointer-events-none aria-disabled:opacity-64",
    "data-[state=loading]:pointer-events-none",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/24",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
    "motion-reduce:transition-none!",
  ],
  defaultVariants: {
    clickEffect: true,
    pill: false,
    size: "md",
    variant: "default",
  },
  variants: {
    clickEffect: {
      true: "active:not-aria-[haspopup]:scale-[0.98]",
    },
    pill: {
      true: ["rounded-full!", "px-[calc(var(--btn-px)+(--spacing(1.5)))]"],
    },
    size: {
      "icon-lg": "size-9",
      "icon-md": "size-8",
      "icon-sm": [
        "size-7",
        "rounded-[min(var(--radius-md),12px)]",
        "in-data-[slot=button-group]:rounded-lg",
      ],
      "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-5",
      "icon-xs": [
        "size-6",
        "rounded-[min(var(--radius-md),10px)]",
        "in-data-[slot=button-group]:rounded-lg",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
      ],
      lg: ["h-9", "[--btn-px:calc(--spacing(3.5)-1px)]", "px-(--btn-px)"],
      md: ["h-8", "[--btn-px:calc(--spacing(3)-1px)]", "px-(--btn-px)"],
      sm: [
        "h-7",
        "gap-1.5",
        "[--btn-px:calc(--spacing(2.5)-1px)]",
        "px-(--btn-px)",
        "text-[0.8rem]",
        "rounded-[min(var(--radius-md),12px)]",
        "in-data-[slot=button-group]:rounded-lg",
        "[&_svg:not([class*='size-'])]:size-3.5",
      ],
      xl: [
        "h-10",
        "text-base",
        "[--btn-px:calc(--spacing(4)-1px)]",
        "px-(--btn-px)",
      ],
      xs: [
        "h-6",
        "gap-1",
        "[--btn-px:calc(--spacing(2)-1px)]",
        "px-(--btn-px)",
        "text-xs",
        "rounded-[min(var(--radius-md),10px)]",
        "in-data-[slot=button-group]:rounded-lg",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
      ],
    },
    variant: {
      default: [
        "bg-primary",
        "border border-transparent shadow-primary/24 shadow-sm",
        "text-primary-foreground",
        "hover:bg-primary/90",
        "focus-visible:border-background",
      ],
      destructive: [
        "bg-destructive",
        "text-white",
        "border border-transparent shadow-destructive/24 shadow-sm",
        "hover:bg-destructive/90",
        "focus-visible:border-background focus-visible:ring-destructive-foreground/32",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-foreground",
        "border border-transparent",
        "focus-visible:border-primary",
      ],
      link: [
        "text-primary",
        "underline-offset-4",
        "border border-transparent",
        "hover:underline",
        "focus-visible:border-primary",
      ],
      outline: [
        "bg-transparent",
        "text-foreground",
        "border border-input shadow-sm/5",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:bg-input/32 dark:hover:bg-input/64",
        "focus-visible:border-primary",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "border border-transparent",
        "focus-visible:border-primary",
        "hover:bg-secondary/80",
      ],
    },
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
    variant = "default",
    size = "md",
    clickEffect = true,
    pill = false,
    isLoading = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ark.button
      className={cn(
        buttonVariants({ clickEffect, pill, size, variant }),
        className
      )}
      data-size={size}
      data-slot="button"
      data-state={isLoading ? "loading" : "idle"}
      data-variant={variant}
      type="button"
      {...rest}
      aria-busy={isLoading}
      aria-disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span aria-hidden className="invisible">
            {children}
          </span>

          <span className="sr-only">{children}</span>

          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner aria-hidden />
          </span>
        </>
      ) : (
        children
      )}
    </ark.button>
  );
};
