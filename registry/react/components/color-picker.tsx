"use client";

import { Portal } from "@ark-ui/react";
import {
  ColorPicker as ArkColorPicker,
  parseColor as parseColorArk,
} from "@ark-ui/react/color-picker";
import { Pipette } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";

export const parseColor = parseColorArk;

export const ColorPicker = (
  props: React.ComponentProps<typeof ArkColorPicker.Root>
) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkColorPicker.Root
      className={cn(
        "w-full",
        "flex flex-col gap-2",
        "text-foreground",
        className
      )}
      data-slot="color-picker"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {children}

      <ArkColorPicker.HiddenInput />
    </ArkColorPicker.Root>
  );
};

export const ColorPickerControl = (
  props: React.ComponentProps<typeof ArkColorPicker.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.Control
      className={cn("flex flex-row items-center gap-2", className)}
      data-slot="color-picker-control"
      {...rest}
    />
  );
};

export const ColorPickerTrigger = (
  props: React.ComponentProps<typeof ArkColorPicker.Trigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkColorPicker.Trigger asChild data-slot="color-picker-trigger" {...rest}>
      <Button
        className={cn("p-1 data-disabled:grayscale", className)}
        clickEffect={false}
        size="icon-md"
        variant="outline"
      >
        <div className="relative size-full shrink-0 overflow-hidden rounded-sm border">
          <ColorPickerTransparencyGrid />
          <ColorPickerValueSwatch />
        </div>
      </Button>
    </ArkColorPicker.Trigger>
  );
};

export const ColorPickerChannelInput = (
  props: React.ComponentProps<typeof ArkColorPicker.ChannelInput>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.ChannelInput
      asChild
      data-slot="color-picker-channel-input"
      {...rest}
    >
      <Input className={cn(className)} />
    </ArkColorPicker.ChannelInput>
  );
};

export const ColorPickerTransparencyGrid = (
  props: React.ComponentProps<typeof ArkColorPicker.TransparencyGrid>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.TransparencyGrid
      className={cn(
        "size-full rounded-[calc(var(--radius-sm)-0.5px)]",
        "bg-[linear-gradient(45deg,#e4e4e4_25%,transparent_25%),linear-gradient(-45deg,#e4e4e4_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e4e4e4_75%),linear-gradient(-45deg,transparent_75%,#e4e4e4_75%)]",
        "bg-position-[0_0,0_4px,4px_-4px,-4px_0] bg-size-(--spacing(2))",
        className
      )}
      {...rest}
    />
  );
};

export const ColorPickerValueSwatch = (
  props: React.ComponentProps<typeof ArkColorPicker.ValueSwatch>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.ValueSwatch
      className={cn("z-1 size-full", className)}
      {...rest}
    />
  );
};

export const ColorPickerContent = (
  props: React.ComponentProps<typeof ArkColorPicker.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <ArkColorPicker.Positioner data-slot="color-picker-positioner">
        <ArkColorPicker.Content
          className={cn(
            "z-50",
            "relative",
            "max-h-96 min-w-64",
            "flex flex-col gap-3",
            "p-4",
            "origin-(--transform-origin)",
            "bg-popover",
            "rounded-xl border shadow-lg/5",
            "outline-none",
            "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
            className
          )}
          data-slot="color-picker-content"
          {...rest}
        />
      </ArkColorPicker.Positioner>
    </Portal>
  );
};

export const ColorPickerArea = (
  props: React.ComponentProps<typeof ArkColorPicker.Area>
) => {
  const { className, ...rest } = props;
  return (
    <ArkColorPicker.Area
      className={cn(
        "relative",
        "h-40",
        "overflow-hidden rounded-md",
        "touch-none",
        className
      )}
      data-slot="color-picker-area"
      {...rest}
    />
  );
};

export const ColorPickerAreaBackground = (
  props: React.ComponentProps<typeof ArkColorPicker.AreaBackground>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.AreaBackground
      className={cn("size-full", "rounded-lg border", className)}
      data-slot="color-picker-area-background"
      {...rest}
    />
  );
};

export const ColorPickerAreaThumb = (
  props: React.ComponentProps<typeof ArkColorPicker.AreaThumb>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.AreaThumb
      className={cn(
        "-translate-x-1/2 -translate-y-1/2",
        "size-4",
        "rounded-full border-2 border-white shadow-xs/5",
        "outline-none ring-border/64 focus-visible:ring-1",
        className
      )}
      data-slot="color-picker-area-thumb"
      {...rest}
    />
  );
};

export const ColorPickerChannelSlider = (
  props: React.ComponentProps<typeof ArkColorPicker.ChannelSlider>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkColorPicker.ChannelSlider
      className={cn("relative h-2.5 flex-1", "rounded-full border", className)}
      data-slot="color-picker-channel-slider"
      {...rest}
    >
      {children}

      <ArkColorPicker.ChannelSliderTrack
        className="h-2.5 w-full rounded-sm"
        data-slot="color-picker-channel-slider-track"
      />
      <ArkColorPicker.ChannelSliderThumb
        className={cn(
          "size-3.5",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-full",
          "border-2 border-white shadow-xs/5",
          "outline-none ring-1 ring-border/64"
        )}
        data-slot="color-picker-channel-slider-thumb"
      />
    </ArkColorPicker.ChannelSlider>
  );
};

export const ColorPickerEyeDropperTrigger = (
  props: React.ComponentProps<typeof ArkColorPicker.EyeDropperTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkColorPicker.EyeDropperTrigger
      data-slot="color-picker-eye-dropper"
      {...rest}
      asChild
    >
      <Button className={cn(className)} size="icon-md" variant="outline">
        {children || <Pipette />}
      </Button>
    </ArkColorPicker.EyeDropperTrigger>
  );
};

export const ColorPickerSwatchGroup = (
  props: React.ComponentProps<typeof ArkColorPicker.SwatchGroup>
) => {
  const { className, ...rest } = props;
  return (
    <ArkColorPicker.SwatchGroup
      className={cn("flex flex-wrap gap-2", className)}
      data-slot="color-picker-swatch-group"
      {...rest}
    />
  );
};

export const ColorPickerSwatchTrigger = (
  props: React.ComponentProps<typeof ArkColorPicker.SwatchTrigger>
) => {
  const { className, ...rest } = props;
  return (
    <ArkColorPicker.SwatchTrigger
      className={cn(
        "flex items-center justify-center rounded-md p-0 outline-none ring-border/64 focus-visible:ring-2",
        className
      )}
      data-slot="color-picker-swatch-trigger"
      {...rest}
    />
  );
};

export const ColorPickerSwatch = (
  props: React.ComponentProps<typeof ArkColorPicker.Swatch>
) => {
  const { className, ...rest } = props;
  return (
    <ArkColorPicker.Swatch
      className={cn(
        "relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-md border shadow-sm",
        className
      )}
      data-slot="color-picker-swatch"
      {...rest}
    />
  );
};

export const ColorPickerSwatchIndicator = (
  props: React.ComponentProps<typeof ArkColorPicker.SwatchIndicator>
) => {
  const { className, ...rest } = props;
  return (
    <ArkColorPicker.SwatchIndicator
      className={cn(
        "absolute inset-0 flex items-center justify-center text-sm text-white drop-shadow-sm [&_svg]:size-4",
        className
      )}
      data-slot="color-picker-swatch-indicator"
      {...rest}
    />
  );
};

export const ColorPickerValue = (
  props: React.ComponentProps<typeof ArkColorPicker.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.ValueText
      className={cn("font-medium text-sm", className)}
      data-slot="color-picker-value"
      {...rest}
    />
  );
};
