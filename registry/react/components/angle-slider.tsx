"use client";

import { AngleSlider as ArkAngleSlider } from "@ark-ui/react/angle-slider";
import type React from "react";
import { cn } from "@/lib/utils";

export const AngleSlider = (
  props: React.ComponentProps<typeof ArkAngleSlider.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAngleSlider.Root
      className={cn(
        "inline-flex flex-col items-center gap-4",
        "data-disabled:opacity-60 data-disabled:grayscale",
        className
      )}
      data-slot="angle-slider"
      {...rest}
    >
      {children}

      <ArkAngleSlider.HiddenInput />
    </ArkAngleSlider.Root>
  );
};

export const AngleSliderLabel = (
  props: React.ComponentProps<typeof ArkAngleSlider.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Label
      className={cn(
        "select-none font-medium text-muted-foreground text-xs uppercase tracking-wider",
        className
      )}
      data-slot="angle-slider-label"
      {...rest}
    />
  );
};

export const AngleSliderControl = (
  props: React.ComponentProps<typeof ArkAngleSlider.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Control
      className={cn(
        "relative flex size-[100px] select-none items-center justify-center rounded-full bg-muted",
        "shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_4px_12px_-4px_rgba(0,0,0,0.1)]",
        "before:absolute before:inset-1 before:rounded-full before:bg-popover",
        "before:shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]",
        "after:absolute after:z-1 after:size-1.5 after:rounded-full after:bg-muted-foreground",
        "data-focus:ring-[3px] data-focus:ring-ring/50 data-focus:ring-offset-2 data-focus:ring-offset-background",
        className
      )}
      data-slot="angle-slider-control"
      {...rest}
    />
  );
};

export const AngleSliderMarkerGroup = (
  props: React.ComponentProps<typeof ArkAngleSlider.MarkerGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.MarkerGroup
      className={cn(
        "absolute inset-0 z-0",
        "rounded-full",
        "pointer-events-none",
        className
      )}
      data-slot="angle-slider-marker-group"
      {...rest}
    />
  );
};

export const AngleSliderMarker = (
  props: React.ComponentProps<typeof ArkAngleSlider.Marker>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Marker
      className={cn(
        "absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5",
        "before:absolute before:top-1.5 before:left-1/2 before:-translate-x-1/2",
        "before:h-1.5 before:w-0.5 before:rounded-sm before:bg-border",
        "data-[state=at-value]:before:bg-primary",
        "data-[state=under-value]:before:bg-primary/60",
        className
      )}
      data-slot="angle-slider-marker"
      {...rest}
    />
  );
};

export const AngleSliderThumb = (
  props: React.ComponentProps<typeof ArkAngleSlider.Thumb>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Thumb
      className={cn(
        "absolute top-0 bottom-0 left-[calc(50%-1.5px)] z-2 h-full w-[3px] outline-none",
        "before:absolute before:top-1 before:left-1/2 before:-translate-x-1/2",
        "before:size-2.5 before:rounded-full before:border-2 before:border-popover before:bg-primary",
        "before:shadow-sm before:transition-transform",
        "after:absolute after:top-3.5 after:left-1/2 after:-translate-x-1/2",
        "after:h-[calc(50%-18px)] after:w-0.5 after:rounded-sm after:bg-linear-to-b after:from-primary after:to-transparent",
        "focus-visible:before:ring-[3px] focus-visible:before:ring-ring focus-visible:before:ring-offset-2",
        "active:before:scale-110",
        className
      )}
      data-slot="angle-slider-thumb"
      {...rest}
    />
  );
};

export const AngleSliderValueText = (
  props: React.ComponentProps<typeof ArkAngleSlider.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.ValueText
      className={cn(
        "font-semibold text-foreground text-xl tabular-nums",
        className
      )}
      data-slot="angle-slider-value-text"
      {...rest}
    />
  );
};
