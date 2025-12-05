import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import type React from "react";
import { cn } from "@/lib/utils";

export const Switch = (props: React.ComponentProps<typeof ArkSwitch.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkSwitch.Root
      className={cn(
        "peer",
        "h-[1.15rem] w-8",
        "inline-flex shrink-0 items-center",
        "rounded-full border border-transparent shadow-xs",
        "transition-all",
        "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary",
        "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      )}
      {...rest}
    >
      <ArkSwitch.Control>
        <ArkSwitch.Thumb
          className={cn(
            "block",
            "size-4",
            "pointer-events-none",
            "bg-background",
            "rounded-full",
            "transition-transform",
            "ring-0",
            "data-[state=checked]:translate-x-[calc(100%-2px)] dark:data-[state=checked]:bg-primary-foreground",
            "dark:data-[state=unchecked]:bg-foreground",
            "data-[state=unchecked]:translate-x-0"
          )}
        />
      </ArkSwitch.Control>

      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
};
