import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const iconTileVariants = tv({
  base: [
    "size-(--size)",
    "relative isolate",
    "inline-flex shrink-0 items-center justify-center",
    "font-medium text-muted-foreground",
    "rounded-lg border",
    "overflow-hidden",
    "[&_svg:not([class*='size-'])]:size-(--icon-size)",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[a&]:cursor-pointer [button&]:cursor-pointer",
    "[a&]:transition-colors [button&]:transition-colors",
    "disabled:pointer-events-none disabled:opacity-64",
    "aria-disabled:pointer-events-none aria-disabled:opacity-64",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "motion-reduce:transition-none!",
  ],
  defaultVariants: {
    fill: false,
    size: "md",
    variant: "default",
  },
  variants: {
    fill: {
      false: "",
      true: "rounded-full before:rounded-full",
    },
    size: {
      lg: ["[--size:--spacing(12)]", "[--icon-size:--spacing(5.5)]"],
      md: ["[--size:--spacing(10)]", "[--icon-size:--spacing(4.5)]"],
      sm: ["[--size:--spacing(8)]", "[--icon-size:--spacing(4)]"],
      xl: ["[--size:--spacing(14)]", "[--icon-size:--spacing(7)]"],
      xs: ["[--size:--spacing(6)]", "[--icon-size:--spacing(3.5)]"],
    },
    variant: {
      default: [
        "border-border bg-muted shadow-sm/5 ring-2 ring-background",
        "text-foreground",
        "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "[button&]:hover:bg-accent [button&]:hover:text-accent-foreground",
      ],
      frame: [
        "border-transparent bg-muted p-1",
        "before:absolute before:inset-1 before:-z-10 before:rounded-lg before:border before:bg-background before:shadow-xs/5",
      ],
      outline: [
        "border-border bg-background shadow-xs/5",
        "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "[button&]:hover:bg-accent [button&]:hover:text-accent-foreground",
      ],
      primary: [
        "border-primary bg-primary text-primary-foreground shadow-primary/24 shadow-sm",
        "[a&]:hover:bg-primary/90 [button&]:hover:bg-primary/90",
      ],
    },
  },
});

export interface IconTileProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof iconTileVariants> {}

export const IconTile = (props: IconTileProps) => {
  const {
    variant = "default",
    size = "md",
    fill = false,
    className,
    ...rest
  } = props;

  return (
    <ark.span
      className={cn(iconTileVariants({ fill, size, variant }), className)}
      data-fill={fill}
      data-size={size}
      data-slot="icon-tile"
      data-variant={variant}
      {...rest}
    />
  );
};
