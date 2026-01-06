import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import { Circle } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const RadioGroup = (
  props: React.ComponentProps<typeof ArkRadioGroup.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkRadioGroup.Root
      className={cn("grid gap-3", className)}
      data-slot="radio-group"
      {...rest}
    >
      <ArkRadioGroup.Indicator data-slot="radio-group-indicator" />

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
        "relative inline-flex items-center gap-2",
        "data-disabled:cursor-not-allowed",
        className
      )}
      data-slot="radio-group-item"
      {...rest}
    >
      <ArkRadioGroup.ItemControl
        className={cn(
          "group/radio-item",
          "size-4",
          "flex items-center justify-center",
          "bg-input/60",
          "data-hover:bg-accent",
          "text-background",
          "rounded-full border",
          "transition-all",
          "data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50"
        )}
        data-slot="radio-group-item-control"
      >
        <Circle className="size-2.5 fill-primary opacity-0 transition-opacity group-data-[state=checked]/radio-item:opacity-100" />
      </ArkRadioGroup.ItemControl>

      <ArkRadioGroup.ItemText
        className={cn("font-medium text-sm", "data-disabled:opacity-40")}
        data-slot="radio-group-item-text"
      >
        {children}
      </ArkRadioGroup.ItemText>

      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
};
