"use client";

import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Toggle, type ToggleProps } from "@/registry/react/components/toggle";

type ToggleGroupContextProps = Pick<ToggleProps, "variant" | "size">;

const ToggleGroupContext = React.createContext({} as ToggleGroupContextProps);

type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;

interface ToggleGroupProps
  extends Omit<React.ComponentProps<typeof ArkToggleGroup.Root>, "className">,
    Pick<ToggleProps, "variant" | "size"> {
  /** Gap between items. Use 0 for segmented (merged) appearance. */
  spacing?: SpacingValue;
  className?: string;
}

const spacingToGap: Record<SpacingValue, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
};

export const ToggleGroup = (props: ToggleGroupProps) => {
  const {
    multiple = true,
    orientation = "horizontal",
    variant = "ghost",
    size = "md",
    spacing = 0,
    className,
    ...rest
  } = props;

  const isSegmented = variant === "outline" && spacing === 0;

  return (
    <ToggleGroupContext value={{ variant, size }}>
      <ArkToggleGroup.Root
        className={cn(
          "group/toggle-group flex w-fit items-center",
          spacingToGap[spacing as SpacingValue] ?? "gap-0",
          orientation === "vertical" && "flex-col",
          isSegmented &&
            orientation === "horizontal" && [
              "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0",
              "[&>*:not(:last-child)]:rounded-r-none",
            ],
          isSegmented &&
            orientation === "vertical" && [
              "[&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0",
              "[&>*:not(:last-child)]:rounded-b-none",
            ],
          "rounded-md",
          className
        )}
        data-slot="toggle-group"
        data-variant={variant}
        multiple={multiple}
        orientation={orientation}
        {...rest}
      />
    </ToggleGroupContext>
  );
};

const toggleGroupItemVariants = tv({
  base: ["shrink-0", "w-auto min-w-0", "focus:z-10 focus-visible:z-10"],
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
