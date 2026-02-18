"use client";

import {
  AngleSlider as ArkAngleSlider,
  useAngleSliderContext,
} from "@ark-ui/react/angle-slider";
import type React from "react";
import { cn } from "@/lib/utils";

const SLIDER_SIZE = 200;
const RING_THICKNESS = 20;

export const AngleSlider = (
  props: React.ComponentProps<typeof ArkAngleSlider.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAngleSlider.Root
      className={cn(
        "relative flex size-[200px] flex-col items-center justify-center",
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

export const AngleSliderControl = (
  props: React.ComponentProps<typeof ArkAngleSlider.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Control
      className={cn("absolute inset-0", className)}
      data-slot="angle-slider-control"
      {...rest}
    />
  );
};

const RING_RADIUS = SLIDER_SIZE / 2 - RING_THICKNESS / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function AngleSliderProgressRingImpl() {
  const api = useAngleSliderContext();
  const percent = api.value / 360;
  const dashLength = percent * RING_CIRCUMFERENCE;
  const gapLength = RING_CIRCUMFERENCE - dashLength;

  return (
    <svg
      aria-hidden
      className="pointer-events-none -rotate-90"
      height={SLIDER_SIZE}
      viewBox={`0 0 ${SLIDER_SIZE} ${SLIDER_SIZE}`}
      width={SLIDER_SIZE}
    >
      <title>Slider Ring</title>
      <circle
        className="stroke-muted"
        cx={SLIDER_SIZE / 2}
        cy={SLIDER_SIZE / 2}
        fill="transparent"
        r={RING_RADIUS}
        strokeWidth={RING_THICKNESS}
      />
      <circle
        className="stroke-primary [stroke-linecap:round]"
        cx={SLIDER_SIZE / 2}
        cy={SLIDER_SIZE / 2}
        fill="transparent"
        r={RING_RADIUS}
        strokeDasharray={`${dashLength} ${gapLength}`}
        strokeWidth={RING_THICKNESS}
      />
    </svg>
  );
}

export const AngleSliderProgressRing = () => <AngleSliderProgressRingImpl />;

export const AngleSliderThumb = (
  props: React.ComponentProps<typeof ArkAngleSlider.Thumb>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Thumb
      className={cn(
        "pointer-events-none absolute inset-y-0 left-[calc(50%-1.5px)] z-10 flex h-full w-[3px] items-start outline-none",
        "focus-visible:[&_span]:outline-2 focus-visible:[&_span]:outline-primary focus-visible:[&_span]:outline-offset-1",
        className
      )}
      data-slot="angle-slider-thumb"
      {...rest}
    >
      <span
        aria-hidden
        className="size-5 shrink-0 scale-[1.25] rounded-full bg-primary"
      />
    </ArkAngleSlider.Thumb>
  );
};

export const AngleSliderValueText = (
  props: React.ComponentProps<typeof ArkAngleSlider.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.ValueText
      className={cn(
        "font-semibold text-4xl text-foreground tabular-nums",
        className
      )}
      data-slot="angle-slider-value-text"
      {...rest}
    />
  );
};

function AngleSliderValueDisplayImpl() {
  const api = useAngleSliderContext();
  return (
    <div className="flex flex-col items-center gap-0">
      <ArkAngleSlider.ValueText
        className="font-semibold text-4xl text-foreground tabular-nums"
        data-slot="angle-slider-value-text"
      >
        {api.value}°
      </ArkAngleSlider.ValueText>
      <ArkAngleSlider.Label
        className="text-muted-foreground text-sm"
        data-slot="angle-slider-label"
      >
        degrees
      </ArkAngleSlider.Label>
    </div>
  );
}

export const AngleSliderValueDisplay = () => <AngleSliderValueDisplayImpl />;

export const AngleSliderLabel = (
  props: React.ComponentProps<typeof ArkAngleSlider.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.Label
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="angle-slider-label"
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
        "pointer-events-none absolute inset-0 z-0 rounded-full",
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
