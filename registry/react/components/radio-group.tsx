import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import { Circle } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "./field";

export const RadioGroup = (
  props: React.ComponentProps<typeof ArkRadioGroup.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkRadioGroup.Root
      className={cn("flex flex-col gap-3", className)}
      data-slot="radio-group"
      {...rest}
    >
      {children}
    </ArkRadioGroup.Root>
  );
};

export const RadioGroupItem = (
  props: React.ComponentProps<typeof ArkRadioGroup.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkRadioGroup.Item
      className={cn(
        "relative",
        "inline-flex items-center gap-2",
        "data-disabled:opacity-50",
        className
      )}
      data-slot="radio-group-item"
      {...rest}
    >
      <ArkRadioGroup.ItemControl
        className={cn(
          // Layout & Structure
          "inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-muted",
          "data-[state=checked]:bg-primary"
        )}
        data-slot="radio-group-item-control"
      >
        <Circle className="size-2.5 fill-primary opacity-0 transition-opacity group-data-[state=checked]/radio-item:opacity-100" />
      </ArkRadioGroup.ItemControl>

      <RadioGroupText>{children}</RadioGroupText>

      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
};

export const RadioGroupText = (
  props: React.ComponentProps<typeof ArkRadioGroup.ItemText>
) => {
  const { className, children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkRadioGroup.ItemText data-slot="radio-group-item-text" {...rest}>
        {children}
      </ArkRadioGroup.ItemText>
    </FieldLabel>
  );
};

export const RadioGroupLabel = (
  props: React.ComponentProps<typeof ArkRadioGroup.Label>
) => {
  const { className, children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkRadioGroup.Label data-slot="radio-group-label" {...rest}>
        {children}
      </ArkRadioGroup.Label>
    </FieldLabel>
  );
};
