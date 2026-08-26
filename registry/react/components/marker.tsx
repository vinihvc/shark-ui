"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const markerVariants = tv({
  base: [
    "group/marker relative flex min-h-4 w-full items-center gap-2",
    "text-left text-muted-foreground text-sm",
    "[&_svg:not([class*='size-'])]:size-4",
    "[a]:underline [a]:underline-offset-3 [a]:hover:text-foreground",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      border: "border-border border-b pb-2",
      default: "",
      separator: [
        "before:me-1 before:h-px before:min-w-0 before:flex-1 before:bg-border",
        "after:ms-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",
      ],
    },
  },
});

interface MarkerProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof markerVariants> {}

export const Marker = (props: MarkerProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(markerVariants({ variant }), className)}
      data-slot="marker"
      data-variant={variant}
      {...rest}
    />
  );
};

export const MarkerIcon = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot="marker-icon"
      {...rest}
    />
  );
};

export const MarkerContent = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "wrap-break-word min-w-0",
        "group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center",
        "*:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      data-slot="marker-content"
      {...rest}
    />
  );
};
