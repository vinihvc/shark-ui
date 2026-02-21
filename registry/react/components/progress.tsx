import { Progress as ArkProgress } from "@ark-ui/react/progress";
import type React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "./field";

interface ProgressProps
  extends Omit<React.ComponentProps<typeof ArkProgress.Root>, "value"> {
  /**
   * Shows indeterminate progress
   *
   * @default false
   */
  indeterminate?: boolean;
  /**
   * The value of the progress bar
   *
   * @default 0
   */
  value?: number;
}

export const Progress = (props: ProgressProps) => {
  const {
    value,
    orientation = "horizontal",
    indeterminate = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkProgress.Root
      className={cn(
        "flex flex-wrap gap-3",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:-scale-y-100",
        className
      )}
      data-slot="progress"
      orientation={orientation}
      value={indeterminate ? null : value}
      {...rest}
    >
      {children}

      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </ArkProgress.Root>
  );
};

export const ProgressTrack = (
  props: React.ComponentProps<typeof ArkProgress.Track>
) => {
  return (
    <ArkProgress.Track
      className={cn(
        "bg-input",
        "rounded-full",
        "overflow-x-hidden",
        "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
      )}
      data-slot="progress-track"
      {...props}
    />
  );
};

export const ProgressRange = (
  props: React.ComponentProps<typeof ArkProgress.Range>
) => {
  return (
    <ArkProgress.Range
      className={cn(
        "bg-primary",
        "transition-all duration-300 ease-out",
        "data-[orientation=horizontal]:h-full",
        "data-[orientation=vertical]:h-full",
        "data-[state=indeterminate]:w-1/3 data-[state=indeterminate]:animate-indeterminate data-[state=indeterminate]:duration-100"
      )}
      data-slot="progress-range"
      {...props}
    />
  );
};

export const ProgressValue = (
  props: React.ComponentProps<typeof ArkProgress.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkProgress.ValueText
        className={cn("ms-auto tabular-nums", className)}
        data-slot="progress-value"
        {...rest}
      />
    </FieldLabel>
  );
};
