import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const switchVariants = tv({
  slots: {
    root: [
      "group peer inline-flex items-center space-x-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    control: [
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
    ],
    thumb: [
      "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
      "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
    ],
    label: [
      "font-medium text-sm leading-none",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    ],
    hiddenInput: "sr-only",
  },
});

const { root, control, thumb, label, hiddenInput } = switchVariants();

export interface SwitchProps
  extends React.ComponentProps<typeof ArkSwitch.Root>,
    VariantProps<typeof switchVariants> {}

const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof ArkSwitch.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <ArkSwitch.Root className={cn(root(), className)} ref={ref} {...props} />
));
SwitchRoot.displayName = "Switch";

const SwitchControl = React.forwardRef<
  React.ElementRef<typeof ArkSwitch.Control>,
  React.ComponentProps<typeof ArkSwitch.Control>
>(({ className, ...props }, ref) => (
  <ArkSwitch.Control
    className={cn(control(), className)}
    ref={ref}
    {...props}
  />
));
SwitchControl.displayName = "SwitchControl";

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof ArkSwitch.Thumb>,
  React.ComponentProps<typeof ArkSwitch.Thumb>
>(({ className, ...props }, ref) => (
  <ArkSwitch.Thumb className={cn(thumb(), className)} ref={ref} {...props} />
));
SwitchThumb.displayName = "SwitchThumb";

const SwitchLabel = React.forwardRef<
  React.ElementRef<typeof ArkSwitch.Label>,
  React.ComponentProps<typeof ArkSwitch.Label>
>(({ className, ...props }, ref) => (
  <ArkSwitch.Label className={cn(label(), className)} ref={ref} {...props} />
));
SwitchLabel.displayName = "SwitchLabel";

const SwitchHiddenInput = React.forwardRef<
  React.ElementRef<typeof ArkSwitch.HiddenInput>,
  React.ComponentProps<typeof ArkSwitch.HiddenInput>
>(({ className, ...props }, ref) => (
  <ArkSwitch.HiddenInput
    className={cn(hiddenInput(), className)}
    ref={ref}
    {...props}
  />
));
SwitchHiddenInput.displayName = "SwitchHiddenInput";

export const Switch = {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
  HiddenInput: SwitchHiddenInput,
};
