"use client";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { Check, Minus } from "lucide-react";
import type React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const CheckboxGroup = (
  props: React.ComponentProps<typeof ArkCheckbox.Group>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCheckbox.Group
      className={cn("flex flex-col gap-2", className)}
      data-slot="checkbox-group"
      {...rest}
    />
  );
};

export const checkboxVariants = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center",
    "size-4",
    "bg-transparent",
    "rounded-sm border border-input shadow-xs/5",
    "transition-shadow",
    "data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
    "dark:data-focus-visible:data-invalid:border-destructive-foreground/64 dark:data-focus-visible:data-invalid:ring-destructive-foreground/48",
    "data-disabled:opacity-64",
    "[[data-disabled],[data-checked],[data-invalid]]:shadow-none",
    "data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
    "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/20",
    "dark:not-data-checked:bg-input/32 dark:data-invalid:ring-destructive-foreground/24",
  ],
});

export const Checkbox = (
  props: React.ComponentProps<typeof ArkCheckbox.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCheckbox.Root
      className={cn(checkboxVariants(), className)}
      data-slot="checkbox"
      role="checkbox"
      {...rest}
    >
      <ArkCheckbox.Control data-slot="checkbox-control">
        <CheckboxIndicator>
          <Check />
        </CheckboxIndicator>

        <CheckboxIndicator indeterminate>
          <Minus />
        </CheckboxIndicator>
      </ArkCheckbox.Control>

      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
};

export const CheckboxIndicator = (
  props: React.ComponentProps<typeof ArkCheckbox.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCheckbox.Indicator
      className={cn(
        "absolute -inset-px",
        "flex items-center justify-center",
        "rounded-sm",
        "text-primary-foreground",
        "data-[state=checked]:bg-primary",
        "data-[state=unchecked]:hidden",
        "data-[state=indeterminate]:text-foreground"
      )}
      data-slot="checkbox-indicator"
      {...rest}
    />
  );
};
