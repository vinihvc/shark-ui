"use client";

import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import React from "react";
import { cn } from "@/lib/utils";
import { Toggle, type ToggleProps } from "@/registry/react/components/toggle";

type ToggleGroupContextProps = Pick<ToggleProps, "variant" | "size">;

const ToggleGroupContext = React.createContext({} as ToggleGroupContextProps);

interface ToggleGroupProps
  extends React.ComponentProps<typeof ArkToggleGroup.Root>,
    Pick<ToggleProps, "variant" | "size"> {
  /**
   * The spacing variable value
   */
  spacing?: number;
}

export const ToggleGroup = (props: ToggleGroupProps) => {
  const {
    spacing = 0,
    variant = "outline",
    size = "md",
    className,
    ...rest
  } = props;

  return (
    <ToggleGroupContext value={{ variant, size }}>
      <ArkToggleGroup.Root
        className={cn(
          "group/toggle-group flex w-fit items-center gap-(--toggle-group-spacing) rounded-md",
          className
        )}
        data-spacing={spacing}
        style={
          {
            "--toggle-group-spacing": `calc(${spacing} * var(--spacing))`,
          } as React.CSSProperties
        }
        {...rest}
      />
    </ToggleGroupContext>
  );
};

export const ToggleGroupItem = (
  props: React.ComponentProps<typeof ArkToggleGroup.Item>
) => {
  const { value, className, ...rest } = props;

  const { variant, size } = useToggleGroupContext();

  return (
    <ArkToggleGroup.Item asChild value={value}>
      <Toggle
        className={cn(
          "shrink-0",
          "w-auto min-w-0",
          "focus:z-10 focus-visible:z-10",
          "group-data-[spacing=0]/toggle-group:rounded-none",
          "group-data-[spacing=0]/toggle-group:border-l-0",
          "group-data-[spacing=0]/toggle-group:shadow-none",
          "group-data-[spacing=0]/toggle-group:first:rounded-l-md",
          "group-data-[spacing=0]/toggle-group:last:rounded-r-md",
          "group-data-[spacing=0]/toggle-group:first:border-l",
          className
        )}
        size={size}
        variant={variant}
        {...rest}
      />
    </ArkToggleGroup.Item>
  );
};

const useToggleGroupContext = () => {
  const context = React.use(ToggleGroupContext);

  if (!context) {
    throw new Error("useToggleGroupContext must be used within a ToggleGroup");
  }

  return context;
};
