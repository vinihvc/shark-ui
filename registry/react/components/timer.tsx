"use client";

import {
  Timer as ArkTimer,
  useTimer as useArkTimer,
} from "@ark-ui/react/timer";
import type React from "react";
import { cn } from "@/lib/utils";

export const useTimer = useArkTimer;

export const Timer = (props: React.ComponentProps<typeof ArkTimer.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Root
      className={cn(
        "flex flex-col items-start gap-4 text-foreground",
        className
      )}
      data-slot="timer"
      {...rest}
    />
  );
};

export const TimerArea = (
  props: React.ComponentProps<typeof ArkTimer.Area>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Area
      className={cn("flex items-center gap-2", className)}
      data-slot="timer-area"
      {...rest}
    />
  );
};

export const TimerItem = (
  props: React.ComponentProps<typeof ArkTimer.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Item
      className={cn(
        "min-w-[2ch] text-center font-semibold text-2xl text-foreground tabular-nums",
        className
      )}
      data-slot="timer-item"
      {...rest}
    />
  );
};

export const TimerSeparator = (
  props: React.ComponentProps<typeof ArkTimer.Separator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Separator
      className={cn("font-semibold text-2xl text-muted-foreground", className)}
      data-slot="timer-separator"
      {...rest}
    />
  );
};

export const TimerControl = (
  props: React.ComponentProps<typeof ArkTimer.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.Control
      className={cn("flex items-center gap-2", className)}
      data-slot="timer-control"
      {...rest}
    />
  );
};

export const TimerActionTrigger = (
  props: React.ComponentProps<typeof ArkTimer.ActionTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTimer.ActionTrigger
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-transparent px-4 py-2 font-medium text-foreground text-sm transition-colors",
        "hover:bg-muted",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-disabled:opacity-64 data-disabled:grayscale",
        "[&_svg]:size-4",
        className
      )}
      data-slot="timer-action"
      {...rest}
    />
  );
};
