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
        "[--size:--spacing(4)]",
        "h-[calc(var(--size)+2px)] w-[calc(var(--size)*2-2px)]",
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
        className
      )}
      data-slot="switch"
      {...rest}
    >
      <ArkSwitch.Control data-slot="switch-control">
        <ArkSwitch.Thumb
          className={cn(
            "block",
            "size-[calc(var(--size)-2px)]",
            "pointer-events-none",
            "bg-background",
            "rounded-full",
            "transition-transform",
            "ring-0",
            "data-[state=checked]:translate-x-[calc(var(--size)-2px)] dark:data-[state=checked]:bg-primary-foreground",
            "dark:data-[state=unchecked]:bg-foreground",
            "data-[state=unchecked]:translate-x-0"
          )}
          data-slot="switch-thumb"
        />
      </ArkSwitch.Control>

      <ArkSwitch.HiddenInput tabIndex={tabIndex} />
    </ArkSwitch.Root>
  );
};
