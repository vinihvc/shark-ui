import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const radioGroupVariants = tv({
  slots: {
    root: "grid gap-2",
    label:
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    indicator: "flex items-center space-x-2",
    item: [
      "flex items-center space-x-2",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    ],
    itemControl: [
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
    ],
    itemText:
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    itemHiddenInput: "sr-only",
  },
});

const { root, label, indicator, item, itemControl, itemText, itemHiddenInput } =
  radioGroupVariants();

export interface RadioGroupProps
  extends React.ComponentProps<typeof ArkRadioGroup.Root>,
    VariantProps<typeof radioGroupVariants> {}

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.Root className={cn(root(), className)} ref={ref} {...props} />
));
RadioGroupRoot.displayName = "RadioGroup";

const RadioGroupLabel = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.Label>,
  React.ComponentProps<typeof ArkRadioGroup.Label>
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.Label
    className={cn(label(), className)}
    ref={ref}
    {...props}
  />
));
RadioGroupLabel.displayName = "RadioGroupLabel";

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.Indicator>,
  React.ComponentProps<typeof ArkRadioGroup.Indicator>
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.Indicator
    className={cn(indicator(), className)}
    ref={ref}
    {...props}
  />
));
RadioGroupIndicator.displayName = "RadioGroupIndicator";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.Item>,
  React.ComponentProps<typeof ArkRadioGroup.Item>
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.Item className={cn(item(), className)} ref={ref} {...props} />
));
RadioGroupItem.displayName = "RadioGroupItem";

const RadioGroupItemControl = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.ItemControl>,
  React.ComponentProps<typeof ArkRadioGroup.ItemControl>
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.ItemControl
    className={cn(itemControl(), className)}
    ref={ref}
    {...props}
  />
));
RadioGroupItemControl.displayName = "RadioGroupItemControl";

const RadioGroupItemText = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.ItemText>,
  React.ComponentProps<typeof ArkRadioGroup.ItemText>
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.ItemText
    className={cn(itemText(), className)}
    ref={ref}
    {...props}
  />
));
RadioGroupItemText.displayName = "RadioGroupItemText";

const RadioGroupItemHiddenInput = React.forwardRef<
  React.ElementRef<typeof ArkRadioGroup.ItemHiddenInput>,
  React.ComponentProps<typeof ArkRadioGroup.ItemHiddenInput>
>(({ className, ...props }, ref) => (
  <ArkRadioGroup.ItemHiddenInput
    className={cn(itemHiddenInput(), className)}
    ref={ref}
    {...props}
  />
));
RadioGroupItemHiddenInput.displayName = "RadioGroupItemHiddenInput";

export const RadioGroup = {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  ItemHiddenInput: RadioGroupItemHiddenInput,
};
