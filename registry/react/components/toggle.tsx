"use client";

import { Toggle as ArkToggle, useToggleContext } from "@ark-ui/react/toggle";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/react/components/button";

export const useToggle = useToggleContext;

export const toggleVariants = tv({
  base: [
    "relative",
    "data-[state=on]:bg-input/64 dark:data-[state=on]:bg-input/64",
    "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: "min-w-9",
      md: "min-w-8",
      sm: "min-w-7",
    },
  },
});

export interface ToggleProps
  extends React.ComponentProps<typeof ArkToggle.Root>,
    VariantProps<typeof toggleVariants>,
    Pick<VariantProps<typeof buttonVariants>, "pill"> {
  /**
   * The variant of the toggle
   *
   * @default "outline"
   */
  variant?: Extract<
    VariantProps<typeof buttonVariants>["variant"],
    "outline" | "ghost"
  >;
}

export const Toggle = (props: ToggleProps) => {
  const {
    variant = "ghost",
    size = "md",
    pill = false,
    className,
    ...rest
  } = props;

  return (
    <ArkToggle.Root
      className={cn(
        buttonVariants({ clickEffect: false, pill, size, variant }),
        toggleVariants({ size }),
        className
      )}
      data-slot="toggle"
      {...rest}
    />
  );
};

export const ToggleIndicator = (
  props: React.ComponentProps<typeof ArkToggle.Indicator>
) => {
  const { children, ...rest } = props;

  return (
    <ArkToggle.Indicator
      className="flex items-center gap-2"
      data-slot="toggle-indicator"
      {...rest}
    >
      {children}
    </ArkToggle.Indicator>
  );
};
