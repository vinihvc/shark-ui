import {
  RadioGroup as ArkRadioGroup,
  useRadioGroupContext,
} from "@ark-ui/solid/radio-group";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/solid/components/field";

export const useRadioGroup = useRadioGroupContext;

export const RadioGroup = (
  props: ComponentProps<typeof ArkRadioGroup.Root>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkRadioGroup.Root
      class={cn(
        "flex flex-col gap-3",
        "data-invalid:text-destructive dark:data-invalid:text-destructive-foreground",
        className
      )}
      data-slot="radio-group"
      {...rest}
    >
      {children}
    </ArkRadioGroup.Root>
  );
};

export const RadioGroupItem = (
  props: ComponentProps<typeof ArkRadioGroup.Item>
) => {
  const { tabIndex, className, children, ...rest } = props;

  return (
    <ArkRadioGroup.Item
      class={cn(
        "inline-flex items-center gap-2",
        "data-disabled:opacity-64",
        className
      )}
      data-slot="radio-group-item"
      {...rest}
    >
      <ArkRadioGroup.ItemControl
        class={cn(
          "relative",
          "inline-flex shrink-0 items-center justify-center",
          "size-4",
          "border border-input shadow-xs/5",
          "bg-input/30",
          "rounded-full",
          "before:size-1.5 before:rounded-full",
          "data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
          "data-focus-visible:data-invalid:border-destructive/64 data-focus-visible:data-invalid:ring-destructive/48",
          "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
          "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive dark:data-invalid:ring-[3px] dark:data-invalid:ring-destructive-foreground/20",
          "data-[state=checked]:bg-primary data-[state=checked]:before:bg-primary-foreground",
          "data-invalid:data-[state=checked]:bg-transparent data-invalid:data-[state=checked]:before:bg-destructive-foreground"
        )}
        data-slot="radio-group-item-control"
      />

      <RadioGroupText>{children}</RadioGroupText>

      <ArkRadioGroup.ItemHiddenInput tabIndex={tabIndex} />
    </ArkRadioGroup.Item>
  );
};

export const RadioGroupText = (
  props: ComponentProps<typeof ArkRadioGroup.ItemText>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkRadioGroup.ItemText data-slot="radio-group-item-text" {...rest}>
        {children}
      </ArkRadioGroup.ItemText>
    </FieldLabel>
  );
};

export const RadioGroupLabel = (
  props: ComponentProps<typeof ArkRadioGroup.Label>
) => {
  const { children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkRadioGroup.Label data-slot="radio-group-label" {...rest}>
        {children}
      </ArkRadioGroup.Label>
    </FieldLabel>
  );
};
