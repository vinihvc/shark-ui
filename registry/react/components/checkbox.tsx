"use client";

import {
  Checkbox as ArkCheckbox,
  useCheckboxContext,
} from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { checkboxVariants } from "./_shark/checkbox.contract";

export { checkboxVariants } from "./_shark/checkbox.contract";

export const useCheckbox = useCheckboxContext;

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

export const Checkbox = (
  props: React.ComponentProps<typeof ArkCheckbox.Root>
) => {
  const { className, tabIndex, ...rest } = props;

  return (
    <ArkCheckbox.Root
      className={cn(checkboxVariants(), className)}
      data-slot="checkbox"
      role="checkbox"
      {...rest}
    >
      <ArkCheckbox.Control data-slot="checkbox-control">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>

        <CheckboxIndicator indeterminate>
          <MinusIcon />
        </CheckboxIndicator>
      </ArkCheckbox.Control>

      <ArkCheckbox.HiddenInput tabIndex={tabIndex} />
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
        "data-[state=indeterminate]:text-foreground",
        className
      )}
      data-slot="checkbox-indicator"
      {...rest}
    />
  );
};
