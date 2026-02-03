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
          "group/toggle-group flex w-fit items-center gap-(--space) rounded-md [--space:--spacing(0)]",
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
    "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
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
