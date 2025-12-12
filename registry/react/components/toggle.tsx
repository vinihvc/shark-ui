import { Toggle as ArkToggle } from "@ark-ui/react/toggle";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  type ButtonProps,
  buttonVariants,
} from "@/registry/react/components/button";

export const toggleVariants = tv({
  base: ["data-state=on]:bg-accent", "data-[state=on]:text-accent-foreground"],
  variants: {
    size: {
      md: "h-9 min-w-9 px-2",
      sm: "h-8 min-w-8 px-1.5",
      lg: "h-10 min-w-10 px-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ToggleProps
  extends React.ComponentProps<typeof ArkToggle.Root>,
    VariantProps<typeof toggleVariants>,
    Pick<ButtonProps, "variant"> {}

export const Toggle = (props: ToggleProps) => {
  const { variant = "outline", size = "md", className, ...rest } = props;

  return (
    <ArkToggle.Root
      className={cn(
        buttonVariants({ variant }),
        toggleVariants({ size }),
        className
      )}
      {...rest}
    />
  );
};

export const ToggleIndicator = (
  props: React.ComponentProps<typeof ArkToggle.Indicator>
) => {
  const { children, ...rest } = props;

  return (
    <ArkToggle.Indicator className="flex items-center gap-2" {...rest}>
      {children}
    </ArkToggle.Indicator>
  );
};
