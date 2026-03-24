"use client";

import {
  AngleSlider as ArkAngleSlider,
  useAngleSliderContext,
} from "@ark-ui/react/angle-slider";
import React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";

export const useCircularSlider = useAngleSliderContext;

interface CircularSliderContextValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

const CircularSliderContext = React.createContext(
  {} as CircularSliderContextValue
);

export interface CircularSliderProps
  extends React.ComponentProps<typeof ArkAngleSlider.Root>,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">> {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
}

export const CircularSlider = (props: CircularSliderProps) => {
  const {
    className,
    children,
    size = 100,
    thickness = 6,
    markers,
    markersAtSteps = false,
    step = 1,
    ...rest
  } = props;

  const markerValues = React.useMemo(() => {
    if (Array.isArray(markers) && markers.length > 0) {
      return markers;
    }
    if (markers === true) {
      return markersAtSteps
        ? Array.from({ length: Math.floor(360 / step) }, (_, i) => i * step)
        : CLOCK_MARKER_ANGLES;
    }
    return null;
  }, [markers, markersAtSteps, step]);

  const values = React.useMemo(
    () => ({
      size,
      thickness,
      ringRadius: size / 2 - thickness / 2,
      ringCircumference: 2 * Math.PI * (size / 2 - thickness / 2),
      thumbSize: Math.max(thickness + 8, 16),
    }),
    [size, thickness]
  );

  return (
    <CircularSliderContext.Provider value={values}>
      <ArkAngleSlider.Root
        className={cn(
          "relative",
          "flex flex-col items-center justify-center",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          className
        )}
        data-slot="circular-slider"
        step={step}
        style={
          {
            width: size,
            height: size,
            "--thickness": `${thickness}px`,
          } as React.CSSProperties
        }
        {...rest}
      >
        <ArkAngleSlider.Control
          className="group/circular-slider-control absolute inset-0"
          data-slot="circular-slider-control"
        >
          <CircularSliderProgressRing />
          {markerValues ? (
            <CircularSliderMarkerGroup>
              {markerValues.map((value) => (
                <CircularSliderMarker key={value} value={value} />
              ))}
            </CircularSliderMarkerGroup>
          ) : null}
          <CircularSliderThumb />
        </ArkAngleSlider.Control>

        {children}

        <ArkAngleSlider.HiddenInput />
      </ArkAngleSlider.Root>
    </CircularSliderContext.Provider>
  );
};

const CircularSliderProgressRing = () => {
  const api = useAngleSliderContext();
  const { size, thickness, ringRadius, ringCircumference } =
    _useCircularSlider();

  const percent = api.value / 360;
  const dashLength = percent * ringCircumference;
  const gapLength = ringCircumference - dashLength;
  const center = size / 2;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none -rotate-90"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        className="stroke-muted"
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        strokeWidth={thickness}
      />
      <circle
        className="stroke-primary [stroke-linecap:round]"
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        strokeDasharray={`${dashLength} ${gapLength}`}
        strokeWidth={thickness}
      />
    </svg>
  );
};

export const CircularSliderThumb = (
  props: React.ComponentProps<typeof ArkAngleSlider.Thumb>
) => {
  const { className, ...rest } = props;
  const { thumbSize, ringRadius } = _useCircularSlider();
  const halfThumb = thumbSize / 2;

  return (
    <ArkAngleSlider.Thumb
      className={cn(
        "absolute inset-0 z-10 flex items-center justify-center",
        "outline-none",
        "focus-visible:[&_span]:outline-hidden focus-visible:[&_span]:ring-2 focus-visible:[&_span]:ring-ring/32",
        "active:[&_span]:scale-110 active:[&_span]:ring-[3px] active:[&_span]:ring-ring/32",
        className
      )}
      data-slot="circular-slider-thumb"
      style={
        {
          "--size": `${thumbSize}px`,
        } as React.CSSProperties
      }
      {...rest}
    >
      <span
        className={cn(
          "absolute",
          "shrink-0",
          "bg-white",
          "size-(--size)",
          "rounded-full shadow-xs/5 ring-2 ring-border",
          "transition-all",
          "hover:cursor-grab hover:ring-[3px]"
        )}
        style={
          {
            insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
            insetInlineStart: `calc(50% - ${halfThumb}px)`,
          } as React.CSSProperties
        }
      />
    </ArkAngleSlider.Thumb>
  );
};

interface CircularSliderValueProps
  extends Omit<
    React.ComponentProps<typeof ArkAngleSlider.ValueText>,
    "prefix"
  > {
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
}

export const CircularSliderValue = (props: CircularSliderValueProps) => {
  const { prefix = "", suffix = "", className, ...rest } = props;
  const { value } = useAngleSliderContext();

  return (
    <FieldLabel asChild>
      <ArkAngleSlider.ValueText
        className={cn(
          "gap-1 tabular-nums [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          className
        )}
        data-slot="circular-slider-value"
        {...rest}
      >
        {prefix} {value} {suffix}
      </ArkAngleSlider.ValueText>
    </FieldLabel>
  );
};

export const CircularSliderMarkerGroup = (
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
      data-slot="circular-slider-marker-group"
      {...rest}
    />
  );
};

export const CircularSliderMarker = (
  props: React.ComponentProps<typeof ArkAngleSlider.Marker>
) => {
  const { className, style, ...rest } = props;
  const { size, thickness } = _useCircularSlider();

  const ringRadius = size / 2 - thickness / 2;
  const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
  const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
  const markerOffset =
    size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

  return (
    <ArkAngleSlider.Marker
      className={cn(
        "absolute inset-s-[calc(50%-1px)] top-0 bottom-0 w-0.5",
        "before:absolute before:inset-s-1/2 before:top-(--marker-offset) before:-translate-x-1/2",
        "before:h-(--marker-height) before:w-(--marker-width) before:rounded-md before:bg-border",
        "data-[state=at-value]:before:bg-primary",
        "data-[state=under-value]:before:bg-primary",
        className
      )}
      data-slot="circular-slider-marker"
      style={
        {
          ...style,
          "--marker-offset": `${markerOffset}px`,
          "--marker-height": `${markerHeight}px`,
          "--marker-width": `${markerWidth}px`,
        } as React.CSSProperties
      }
      {...rest}
    />
  );
};

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];

const _useCircularSlider = () => {
  const context = React.useContext(CircularSliderContext);

  if (!context?.ringRadius) {
    throw new Error("useCircularSlider must be used within a CircularSlider");
  }

  return context;
};
