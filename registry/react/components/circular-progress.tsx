"use client";

import { ark } from "@ark-ui/react/";
import {
  Progress as ArkProgress,
  useProgressContext,
} from "@ark-ui/react/progress";
import type React from "react";
import { cn } from "@/lib/utils";

export const useCircularProgress = useProgressContext;

interface CircularProgressProps
  extends React.ComponentProps<typeof ArkProgress.Root>,
    Pick<CircularProgressTrackProps, "size" | "thickness"> {
  /**
   * Shows indeterminate progress.
   *
   * @default false
   */
  indeterminate?: boolean;
}

export const CircularProgress = (props: CircularProgressProps) => {
  const {
    value,
    indeterminate = false,
    size = 32,
    thickness = 4,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkProgress.Root
      className={cn(
        "group/circular-progress",
        "relative",
        "inline-flex items-center justify-center",
        className
      )}
      data-slot="circular-progress"
      value={indeterminate ? null : value}
      {...rest}
    >
      {children}

      <CircularProgressTrack size={size} thickness={thickness} />
    </ArkProgress.Root>
  );
};

interface CircularProgressTrackProps
  extends React.ComponentProps<typeof ark.svg> {
  /**
   * Visual size preset for the progress circle.
   *
   * @default 32
   */
  size?: number;
  /**
   * Stroke thickness in pixels.
   *
   * @default 4
   */
  thickness?: number;
}

export const CircularProgressTrack = (props: CircularProgressTrackProps) => {
  const { size = 32, thickness = 4, ...rest } = props;

  const { max, min, value } = useCircularProgress();

  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;
  const range = Math.max(max - min, 1);
  const normalizedValue =
    value == null ? min : Math.min(Math.max(value, min), max);
  const percent = (normalizedValue - min) / range;
  const dashOffset = circumference * (1 - percent);

  return (
    <ark.svg
      aria-hidden="true"
      className={cn(
        "block",
        "-rotate-90",
        "pointer-events-none",
        "group-data-[state=indeterminate]/circular-progress:animate-spin"
      )}
      data-slot="circular-progress-circle"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...rest}
    >
      <circle
        className="fill-none stroke-input"
        cx={size / 2}
        cy={size / 2}
        data-slot="circular-progress-track"
        r={radius}
        strokeWidth={thickness}
      />
      <circle
        className="fill-none stroke-primary transition-all duration-300 ease-out"
        cx={size / 2}
        cy={size / 2}
        data-slot="circular-progress-range"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={value == null ? circumference * 0.7 : dashOffset}
        strokeLinecap="round"
        strokeWidth={thickness}
      />
    </ark.svg>
  );
};

export const CircularProgressValue = (
  props: React.ComponentProps<typeof ArkProgress.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkProgress.ValueText
      className={cn(
        "font-medium text-xs tabular-nums",
        "pointer-events-none",
        className
      )}
      data-slot="circular-progress-value"
      {...rest}
    />
  );
};
