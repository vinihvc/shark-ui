import { Progress as ArkProgress } from "@ark-ui/react/progress";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const progressVariants = tv({
  slots: {
    root: "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
    track: "h-full w-full bg-secondary",
    range: "h-full bg-primary transition-all",
    label: "font-medium text-foreground text-sm",
    valueText: "text-muted-foreground text-sm",
  },
});

const { root, track, range, label, valueText } = progressVariants();

export interface ProgressProps
  extends React.ComponentProps<typeof ArkProgress.Root>,
    VariantProps<typeof progressVariants> {}

const ProgressRoot = React.forwardRef<
  React.ElementRef<typeof ArkProgress.Root>,
  ProgressProps
>(({ className, ...props }, ref) => (
  <ArkProgress.Root className={cn(root(), className)} ref={ref} {...props} />
));
ProgressRoot.displayName = "Progress";

const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof ArkProgress.Track>,
  React.ComponentProps<typeof ArkProgress.Track>
>(({ className, ...props }, ref) => (
  <ArkProgress.Track className={cn(track(), className)} ref={ref} {...props} />
));
ProgressTrack.displayName = "ProgressTrack";

const ProgressRange = React.forwardRef<
  React.ElementRef<typeof ArkProgress.Range>,
  React.ComponentProps<typeof ArkProgress.Range>
>(({ className, ...props }, ref) => (
  <ArkProgress.Range className={cn(range(), className)} ref={ref} {...props} />
));
ProgressRange.displayName = "ProgressRange";

const ProgressLabel = React.forwardRef<
  React.ElementRef<typeof ArkProgress.Label>,
  React.ComponentProps<typeof ArkProgress.Label>
>(({ className, ...props }, ref) => (
  <ArkProgress.Label className={cn(label(), className)} ref={ref} {...props} />
));
ProgressLabel.displayName = "ProgressLabel";

const ProgressValueText = React.forwardRef<
  React.ElementRef<typeof ArkProgress.ValueText>,
  React.ComponentProps<typeof ArkProgress.ValueText>
>(({ className, ...props }, ref) => (
  <ArkProgress.ValueText
    className={cn(valueText(), className)}
    ref={ref}
    {...props}
  />
));
ProgressValueText.displayName = "ProgressValueText";

export const Progress = {
  Root: ProgressRoot,
  Track: ProgressTrack,
  Range: ProgressRange,
  Label: ProgressLabel,
  ValueText: ProgressValueText,
};
