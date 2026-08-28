"use client";

import { Switch as ArkSwitch, useSwitchContext } from "@ark-ui/react/switch";
import type React from "react";
import { cn } from "@/lib/utils";

export const useSwitch = useSwitchContext;

export const Switch = (props: React.ComponentProps<typeof ArkSwitch.Root>) => {
  const { className, tabIndex, ...rest } = props;

  return (
    <ArkSwitch.Root
      className={cn(
        "group/switch",
        "[--switch-size:var(--size,--spacing(5))]",
        "[--switch-thumb-height:calc(var(--switch-size)-4px)]",
        "[--switch-thumb-width:calc(var(--switch-thumb-height)*1.375)]",
        "h-[var(--switch-size)] w-[calc(var(--switch-size)*2)]",
        "p-0.5",
        "inline-flex shrink-0 items-center",
        "rounded-full border border-transparent",
        "transition-all",
        "outline-none [[data-focus-visible],[data-invalid]]:ring-[3px]",
        "data-focus-visible:border-primary data-focus-visible:ring-ring/32",
        "data-invalid:border-destructive data-invalid:ring-destructive/24",
        "dark:data-invalid:border-destructive-foreground dark:data-invalid:ring-destructive-foreground/20",
        "data-[state=checked]:bg-primary",
        "data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "motion-reduce:transition-none!",
        className
      )}
      data-slot="switch"
      {...rest}
    >
      <ArkSwitch.Control
        className="relative flex size-full items-center"
        data-slot="switch-control"
      >
        <ArkSwitch.Thumb
          className={cn(
            "absolute inset-s-[-1px] block",
            "h-(--switch-thumb-height) w-(--switch-thumb-width)",
            "bg-background",
            "rounded-full shadow-xs/5 ring-0",
            "pointer-events-none",
            "transition-[inset-inline-start]",
            "data-[state=checked]:inset-s-[calc(100%_-_var(--switch-thumb-width)_+_1px)]",
            "dark:data-[state=checked]:bg-primary-foreground",
            "dark:data-[state=unchecked]:bg-foreground",
            "motion-reduce:transition-none!"
          )}
          data-slot="switch-thumb"
        />
      </ArkSwitch.Control>

      <ArkSwitch.HiddenInput tabIndex={tabIndex} />
    </ArkSwitch.Root>
  );
};
