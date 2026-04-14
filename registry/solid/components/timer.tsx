import {
  Timer as ArkTimer,
  useTimer as useArkTimer,
} from "@ark-ui/solid/timer";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useTimer = useArkTimer;

export const Timer = (props: ComponentProps<typeof ArkTimer.Root>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTimer.Root
      class={cn("flex flex-col items-start gap-4 text-foreground", className)}
      data-slot="timer"
      {...rest}
    />
  );
};

export const TimerArea = (props: ComponentProps<typeof ArkTimer.Area>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTimer.Area
      class={cn("flex items-center gap-2", className)}
      data-slot="timer-area"
      {...rest}
    />
  );
};

export const TimerItem = (props: ComponentProps<typeof ArkTimer.Item>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTimer.Item
      class={cn(
        "min-w-[2ch] text-center font-semibold text-2xl text-foreground tabular-nums",
        className
      )}
      data-slot="timer-item"
      {...rest}
    />
  );
};

export const TimerSeparator = (
  props: ComponentProps<typeof ArkTimer.Separator>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTimer.Separator
      class={cn("font-semibold text-2xl text-muted-foreground", className)}
      data-slot="timer-separator"
      {...rest}
    />
  );
};

export const TimerControl = (
  props: ComponentProps<typeof ArkTimer.Control>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTimer.Control
      class={cn("flex items-center gap-2", className)}
      data-slot="timer-control"
      {...rest}
    />
  );
};

export const TimerActionTrigger = (
  props: ComponentProps<typeof ArkTimer.ActionTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTimer.ActionTrigger
      class={cn(
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
