"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const State = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        className
      )}
      data-slot="state"
      {...rest}
    />
  );
};

export const StateHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      )}
      data-slot="state-header"
      {...rest}
    />
  );
};

export const stateMediaVariants = tv({
  base: [
    "mb-2 flex shrink-0 items-center justify-center",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "size-10 rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6",
    },
  },
});

interface StateMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof stateMediaVariants> {}

export const StateMedia = (props: StateMediaProps) => {
  const { className, variant = "default", ...rest } = props;

  return (
    <ark.div
      className={cn(stateMediaVariants({ variant }), className)}
      data-slot="state-media"
      data-variant={variant}
      {...rest}
    />
  );
};

export const StateTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("font-medium text-lg tracking-tight", className)}
      data-slot="state-title"
      {...rest}
    />
  );
};

export const StateDescription = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn(
        "text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="state-description"
      {...rest}
    />
  );
};

export const StateContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        className
      )}
      data-slot="state-content"
      {...rest}
    />
  );
};
