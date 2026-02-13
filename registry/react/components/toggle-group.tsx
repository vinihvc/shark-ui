"use client";

import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";
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

const toggleGroupVariants = tv({
  base: ["flex w-fit items-center", "*:focus-visible:z-10", "rounded-md"],
  variants: {
    orientation: {
      horizontal: "",
      vertical: "flex-col",
    },
    segmented: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      segmented: true,
      orientation: "horizontal",
      class: [
        "[&>[data-slot=toggle-group-item]:not(:first-child)]:-ml-px [&>[data-slot=toggle-group-item]:not(:first-child)]:rounded-l-none [&>[data-slot=toggle-group-item]:not(:first-child)]:border-l-0",
        "[&>[data-slot=toggle-group-item]:not(:last-child)]:rounded-r-none",
      ],
    },
    {
      segmented: true,
      orientation: "vertical",
      class: [
        "[&>[data-slot=toggle-group-item]:not(:first-child)]:-mt-px [&>[data-slot=toggle-group-item]:not(:first-child)]:rounded-t-none [&>[data-slot=toggle-group-item]:not(:first-child)]:border-t-0",
        "[&>[data-slot=toggle-group-item]:not(:last-child)]:rounded-b-none",
      ],
    },
    {
      segmented: true,
      orientation: "horizontal",
      class: [
        "dark:[&>[data-slot=separator]:has(+[data-slot=toggle-group-item]:hover)]:before:bg-input/64",
        "dark:[&>[data-slot=separator]:has(+[data-slot=toggle-group-item][data-state=on])]:before:bg-input",
        "dark:[&>[data-slot=toggle-group-item]:hover+[data-slot=separator]]:before:bg-input/64",
        "dark:[&>[data-slot=toggle-group-item][data-state=on]+[data-slot=separator]]:before:bg-input",
      ],
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    segmented: false,
  },
});

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
  let gapClass = "";
  if (variant === "ghost") {
    gapClass = "gap-0.5";
  } else if (spacing > 0) {
    gapClass = spacingToGap[spacing as SpacingValue];
  }

  return (
    <ToggleGroupContext.Provider value={{ variant, size }}>
      <ArkToggleGroup.Root
        className={cn(
          toggleGroupVariants({ orientation, segmented: isSegmented }),
          gapClass,
          orientation === "horizontal" && "pointer-coarse:*:after:min-w-auto",
          orientation === "vertical" && "pointer-coarse:*:after:min-h-auto",
          className
        )}
        data-size={size}
        data-slot="toggle-group"
        data-variant={variant}
        multiple={multiple}
        orientation={orientation}
        {...rest}
      />
    </ToggleGroupContext.Provider>
  );
};

const toggleGroupItemVariants = tv({
  base: ["shrink-0", "w-auto min-w-0"],
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

function useToggleGroupContext() {
  const context = React.use(ToggleGroupContext);

  if (!context) {
    throw new Error("useToggleGroupContext must be used within a ToggleGroup");
  }

  return context;
}

interface ToggleGroupSeparatorProps
  extends React.ComponentProps<typeof Separator> {
  className?: string;
}

export const ToggleGroupSeparator = (props: ToggleGroupSeparatorProps) => {
  const { orientation = "vertical", className, ...rest } = props;

  return (
    <Separator
      className={cn(
        "pointer-events-none relative bg-input before:absolute before:inset-0 dark:before:bg-input/32",
        orientation === "horizontal" && "mx-0.5",
        orientation === "vertical" && "my-0.5",
        className
      )}
      orientation={orientation}
      {...rest}
    />
  );
};
