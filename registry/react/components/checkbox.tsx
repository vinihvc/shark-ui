import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { Check, Minus } from "lucide-react";
import type React from "react";
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

export const Checkbox = (
  props: React.ComponentProps<typeof ArkCheckbox.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCheckbox.Root
      className={cn(
        "relative",
        "inline-flex shrink-0 items-center justify-center",
        "size-4",
        "bg-background",
        "rounded-[calc(var(--radius)-6px)] border border-input shadow-xs/5",
        "transition-shadow",
        "data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
        "data-focus-visible:data-invalid:border-destructive/64 data-focus-visible:data-invalid:ring-destructive/48",
        "dark:data-focus-visible:data-invalid:border-destructive-foreground/64 dark:data-focus-visible:data-invalid:ring-destructive-foreground/48",
        "data-disabled:opacity-64",
        "[[data-disabled],[data-checked],[data-invalid]]:shadow-none",
        "data-invalid:border-destructive-foreground/36 data-invalid:ring-[3px] data-invalid:ring-destructive-foreground/20",
        "dark:not-data-checked:bg-input/32 dark:data-invalid:ring-destructive-foreground/24",
        className
      )}
      data-slot="checkbox"
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
        "rounded-[calc(var(--radius)-6px)]",
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
