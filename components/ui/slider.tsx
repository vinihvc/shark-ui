import { Slider as ArkSlider } from "@ark-ui/react/slider";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const sliderVariants = tv({
  slots: {
    root: "relative flex w-full touch-none select-none flex-col",
    label:
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    valueText: "text-muted-foreground text-sm",
    control: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
    range: "absolute h-full bg-primary",
    thumb: [
      "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
    ],
    hiddenInput: "sr-only",
  },
});

const { root, label, valueText, control, track, range, thumb, hiddenInput } =
  sliderVariants();

export interface SliderProps
  extends React.ComponentProps<typeof ArkSlider.Root>,
    VariantProps<typeof sliderVariants> {}

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof ArkSlider.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <ArkSlider.Root className={cn(root(), className)} ref={ref} {...props} />
));
SliderRoot.displayName = "Slider";

const SliderLabel = React.forwardRef<
  React.ElementRef<typeof ArkSlider.Label>,
  React.ComponentProps<typeof ArkSlider.Label>
>(({ className, ...props }, ref) => (
  <ArkSlider.Label className={cn(label(), className)} ref={ref} {...props} />
));
SliderLabel.displayName = "SliderLabel";

const SliderValueText = React.forwardRef<
  React.ElementRef<typeof ArkSlider.ValueText>,
  React.ComponentProps<typeof ArkSlider.ValueText>
>(({ className, ...props }, ref) => (
  <ArkSlider.ValueText
    className={cn(valueText(), className)}
    ref={ref}
    {...props}
  />
));
SliderValueText.displayName = "SliderValueText";

const SliderControl = React.forwardRef<
  React.ElementRef<typeof ArkSlider.Control>,
  React.ComponentProps<typeof ArkSlider.Control>
>(({ className, ...props }, ref) => (
  <ArkSlider.Control
    className={cn(control(), className)}
    ref={ref}
    {...props}
  />
));
SliderControl.displayName = "SliderControl";

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof ArkSlider.Track>,
  React.ComponentProps<typeof ArkSlider.Track>
>(({ className, ...props }, ref) => (
  <ArkSlider.Track className={cn(track(), className)} ref={ref} {...props} />
));
SliderTrack.displayName = "SliderTrack";

const SliderRange = React.forwardRef<
  React.ElementRef<typeof ArkSlider.Range>,
  React.ComponentProps<typeof ArkSlider.Range>
>(({ className, ...props }, ref) => (
  <ArkSlider.Range className={cn(range(), className)} ref={ref} {...props} />
));
SliderRange.displayName = "SliderRange";

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof ArkSlider.Thumb>,
  React.ComponentProps<typeof ArkSlider.Thumb>
>(({ className, ...props }, ref) => (
  <ArkSlider.Thumb className={cn(thumb(), className)} ref={ref} {...props} />
));
SliderThumb.displayName = "SliderThumb";

const SliderHiddenInput = React.forwardRef<
  React.ElementRef<typeof ArkSlider.HiddenInput>,
  React.ComponentProps<typeof ArkSlider.HiddenInput>
>(({ className, ...props }, ref) => (
  <ArkSlider.HiddenInput
    className={cn(hiddenInput(), className)}
    ref={ref}
    {...props}
  />
));
SliderHiddenInput.displayName = "SliderHiddenInput";

export const Slider = {
  Root: SliderRoot,
  Label: SliderLabel,
  ValueText: SliderValueText,
  Control: SliderControl,
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
  HiddenInput: SliderHiddenInput,
};
