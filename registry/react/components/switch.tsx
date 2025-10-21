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
      data-slot="switch"
      {...rest}
    >
      <ArkSwitch.Control>
        <ArkSwitch.Thumb className="pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground" />
      </ArkSwitch.Control>

      <ArkSwitch.HiddenInput data-slot="switch-hidden-input" />
    </ArkSwitch.Root>
  );
};
