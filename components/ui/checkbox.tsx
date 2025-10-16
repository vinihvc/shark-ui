import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const checkboxVariants = tv({
  slots: {
    root: [
      "group peer inline-flex items-center space-x-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    control: [
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary",
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
    ],
    indicator: [
      "flex items-center justify-center text-current",
      "data-[state=checked]:fade-in-0 data-[state=checked]:animate-in",
      "data-[state=unchecked]:fade-out-0 data-[state=unchecked]:animate-out",
    ],
    label: [
      "font-medium text-sm leading-none",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    ],
    hiddenInput: "sr-only",
  },
});

const { root, control, indicator, label, hiddenInput } = checkboxVariants();

export interface CheckboxProps
  extends React.ComponentProps<typeof ArkCheckbox.Root>,
    VariantProps<typeof checkboxVariants> {}

const CheckboxRoot = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <ArkCheckbox.Root className={cn(root(), className)} ref={ref} {...props} />
));
CheckboxRoot.displayName = "Checkbox";

const CheckboxControl = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.Control>,
  React.ComponentProps<typeof ArkCheckbox.Control>
>(({ className, ...props }, ref) => (
  <ArkCheckbox.Control
    className={cn(control(), className)}
    ref={ref}
    {...props}
  />
));
CheckboxControl.displayName = "CheckboxControl";

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.Indicator>,
  React.ComponentProps<typeof ArkCheckbox.Indicator>
>(({ className, ...props }, ref) => (
  <ArkCheckbox.Indicator
    className={cn(indicator(), className)}
    ref={ref}
    {...props}
  />
));
CheckboxIndicator.displayName = "CheckboxIndicator";

const CheckboxLabel = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.Label>,
  React.ComponentProps<typeof ArkCheckbox.Label>
>(({ className, ...props }, ref) => (
  <ArkCheckbox.Label className={cn(label(), className)} ref={ref} {...props} />
));
CheckboxLabel.displayName = "CheckboxLabel";

const CheckboxHiddenInput = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.HiddenInput>,
  React.ComponentProps<typeof ArkCheckbox.HiddenInput>
>(({ className, ...props }, ref) => (
  <ArkCheckbox.HiddenInput
    className={cn(hiddenInput(), className)}
    ref={ref}
    {...props}
  />
));
CheckboxHiddenInput.displayName = "CheckboxHiddenInput";

const CheckboxGroup = React.forwardRef<
  React.ElementRef<typeof ArkCheckbox.Group>,
  React.ComponentProps<typeof ArkCheckbox.Group>
>(({ className, ...props }, ref) => (
  <ArkCheckbox.Group
    className={cn("space-y-2", className)}
    ref={ref}
    {...props}
  />
));
CheckboxGroup.displayName = "CheckboxGroup";

export const Checkbox = {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  HiddenInput: CheckboxHiddenInput,
  Group: CheckboxGroup,
};
