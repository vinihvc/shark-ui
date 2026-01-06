"use client";

import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Toggle, type ToggleProps } from "@/registry/react/components/toggle";

type ToggleGroupContextProps = Pick<ToggleProps, "variant" | "size">;

const ToggleGroupContext = React.createContext({} as ToggleGroupContextProps);

interface ToggleGroupProps
  extends React.ComponentProps<typeof ArkToggleGroup.Root>,
    Pick<ToggleProps, "variant" | "size"> {}

export const ToggleGroup = (props: ToggleGroupProps) => {
  const {
    multiple = true,
    variant = "outline",
    size = "md",
    className,
    ...rest
  } = props;

  return (
    <ToggleGroupContext value={{ variant, size }}>
      <ArkToggleGroup.Root
        className={cn(
          "group/toggle-group flex w-fit items-center gap-(--gap) rounded-md [--gap:--spacing(0)]",
          className
        )}
        data-slot="toggle-group"
        multiple={multiple}
        {...rest}
      />
    </ToggleGroupContext>
  );
};

const toggleGroupItemVariants = tv({
  base: [
    "shrink-0",
    "w-auto min-w-0",
    "data-[state=on]:bg-current data-[state=on]:text-current",
    "group-data-[spacing=0]/toggle-group:rounded-none",
    "group-data-[spacing=0]/toggle-group:border-border",
    "group-data-[spacing=0]/toggle-group:shadow-none",
    "group-data-[spacing=0]/toggle-group:first:rounded-l-md",
    "group-data-[spacing=0]/toggle-group:last:rounded-r-md",
    "focus:z-10 focus-visible:z-10",
  ],
});

interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ArkToggleGroup.Item>,
    VariantProps<typeof toggleGroupItemVariants> {}

export const ToggleGroupItem = (props: ToggleGroupItemProps) => {
  const { value, className, ...rest } = props;

  const { variant, size } = useToggleGroupContext();

  return (
    <ArkToggleGroup.Item asChild data-slot="toggle-group-item" value={value}>
      <Toggle
        className={cn(toggleGroupItemVariants(), className)}
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
