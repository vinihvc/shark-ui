import {
  Progress as ArkProgress,
  useProgressContext,
} from "@ark-ui/solid/progress";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/solid/components/field";

export const useProgress = useProgressContext;

interface ProgressProps
  extends Omit<ComponentProps<typeof ArkProgress.Root>, "value"> {
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
    class: className,
    children,
    ...rest
  } = props;

  return (
    <ArkProgress.Root
      class={cn(
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
  props: ComponentProps<typeof ArkProgress.Track>
) => {
  return (
    <ArkProgress.Track
      class={cn(
        "bg-input",
        "rounded-full",
        "overflow-x-hidden",
        "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
      )}
      data-slot="progress-track"
      {...props}
    />
  );
};

export const ProgressRange = (
  props: ComponentProps<typeof ArkProgress.Range>
) => {
  return (
    <ArkProgress.Range
      class={cn(
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
  props: ComponentProps<typeof ArkProgress.ValueText>
) => {
  const { class: className, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkProgress.ValueText
        class={cn("ms-auto tabular-nums", className)}
        data-slot="progress-value"
        {...rest}
      />
    </FieldLabel>
  );
};
