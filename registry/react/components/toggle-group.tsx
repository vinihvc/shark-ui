"use client";

import {
  ToggleGroup as ArkToggleGroup,
  useToggleGroupContext as useArkToggleGroupContext,
} from "@ark-ui/react/toggle-group";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Toggle, type ToggleProps } from "@/registry/react/components/toggle";

export const useToggleGroup = useArkToggleGroupContext;

type ToggleGroupContextProps = Pick<
  ToggleProps,
  "pill" | "size" | "variant"
> & {
  /**
   * Gap between items.
   *
   * @default 0
   */
  spacing?: number;
};

const ToggleGroupContext = React.createContext({} as ToggleGroupContextProps);

interface ToggleGroupProps
  extends React.ComponentProps<typeof ArkToggleGroup.Root>,
    ToggleGroupContextProps {}

const toggleGroupVariants = tv({
  base: ["w-fit", "flex items-center gap-[--spacing(var(--gap))]"],
  defaultVariants: {
    orientation: "horizontal",
    pill: false,
  },
  variants: {
    orientation: {
      horizontal: "flex-row pointer-coarse:*:after:min-w-auto",
      vertical: "flex-col items-stretch pointer-coarse:*:after:min-h-auto",
    },
    pill: {
      false: "rounded-lg",
      true: "rounded-full",
    },
  },
});

export const ToggleGroup = (props: ToggleGroupProps) => {
  const {
    multiple = true,
    orientation = "horizontal",
    variant = "ghost",
    size = "md",
    spacing = 0,
    pill = false,
    className,
    style,
    ...rest
  } = props;

  return (
    <ToggleGroupContext.Provider value={{ pill, size, spacing, variant }}>
      <ArkToggleGroup.Root
        className={cn(toggleGroupVariants({ orientation, pill }), className)}
        data-slot="toggle-group"
        multiple={multiple}
        orientation={orientation}
        style={
          {
            ...style,
            "--gap": spacing,
          } as React.CSSProperties
        }
        {...rest}
      />
    </ToggleGroupContext.Provider>
  );
};

interface ToggleGroupItemProps
  extends React.ComponentProps<typeof ArkToggleGroup.Item> {}

export const ToggleGroupItem = (props: ToggleGroupItemProps) => {
  const { value, className, ...rest } = props;

  const { pill, variant, size, spacing } = _useToggleGroup();

  return (
    <ArkToggleGroup.Item asChild data-slot="toggle-group-item" value={value}>
      <Toggle
        className={cn(
          "shrink-0 focus:z-10 focus-visible:z-10",
          "data-[spacing=0]:rounded-none",
          "data-[spacing=0]:px-2",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=false]:first:rounded-l-lg",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=false]:first:rounded-t-lg",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=false]:last:rounded-r-lg",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=false]:last:rounded-b-lg",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=true]:first:rounded-l-full",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=true]:first:rounded-t-full",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[pill=true]:last:rounded-r-full",
          "data-[orientation=vertical]:data-[spacing=0]:data-[pill=true]:last:rounded-b-full",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:border-l-0",
          "data-[orientation=vertical]:data-[spacing=0]:data-[variant=outline]:border-t-0",
          "data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:first:border-l",
          className
        )}
        data-pill={pill}
        data-spacing={spacing}
        data-variant={variant}
        pill={spacing > 0 ? pill : false}
        size={size}
        variant={variant}
        {...rest}
      />
    </ArkToggleGroup.Item>
  );
};

const _useToggleGroup = () => {
  const context = React.useContext(ToggleGroupContext);

  if (!context) {
    throw new Error("useToggleGroupContext must be used within a ToggleGroup");
  }

  return context;
};
