"use client";

import { Portal } from "@ark-ui/react";
import {
  Select as ArkSelect,
  createListCollection,
} from "@ark-ui/react/select";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import type React from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/registry/react/components/input";

export const createCollection = createListCollection;

export const Select = <T,>(
  props: React.ComponentProps<typeof ArkSelect.Root<T>>
) => {
  const { lazyMount = true, unmountOnExit = true, children, ...rest } = props;

  return (
    <ArkSelect.Root
      data-slot="select"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {children}

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
};

interface SelectTriggerProps
  extends React.ComponentProps<typeof ArkSelect.Trigger>,
    VariantProps<typeof inputVariants> {}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { size = "md", className, children, ...rest } = props;

  return (
    <ArkSelect.Control data-slot="select-control">
      <ArkSelect.Trigger
        className={cn(
          inputVariants({ size }),
          "w-fit",
          "flex items-center justify-between gap-2",
          "*:data-placeholder-shown:text-muted-foreground",
          "data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/50",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-slot="select-trigger"
        {...rest}
      >
        {children}

        <ArkSelect.Indicator data-slot="select-indicator">
          <ChevronsUpDown />
        </ArkSelect.Indicator>
      </ArkSelect.Trigger>
    </ArkSelect.Control>
  );
};

export const SelectValue = (
  props: React.ComponentProps<typeof ArkSelect.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ValueText
      className={cn(
        "flex min-w-0 items-center gap-2 truncate text-nowrap",
        className
      )}
      {...rest}
    />
  );
};

export const SelectContent = (
  props: React.ComponentProps<typeof ArkSelect.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <ArkSelect.Positioner data-slot="select-positioner">
        <ArkSelect.Content
          className={cn(
            "z-50",
            "relative",
            "max-h-96 min-w-(--reference-width)",

            "p-1",
            "bg-popover",
            "text-popover-foreground",
            "rounded-md border shadow-md",
            "overflow-auto",
            "outline-none",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            "data-[side=top]:slide-in-from-bottom-2",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=left]:slide-in-from-right-2",
            className
          )}
          data-slot="select-content"
          {...rest}
        />
      </ArkSelect.Positioner>
    </Portal>
  );
};

interface SelectGroupProps
  extends React.ComponentProps<typeof ArkSelect.ItemGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const SelectGroup = (props: SelectGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ArkSelect.ItemGroup
      className={cn(className)}
      data-slot="select-group"
      {...rest}
    >
      {!!heading && <SelectGroupLabel>{heading}</SelectGroupLabel>}

      {children}
    </ArkSelect.ItemGroup>
  );
};

export const SelectGroupLabel = (
  props: React.ComponentProps<typeof ArkSelect.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ItemGroupLabel
      className={cn(
        "px-2 py-1.5 font-semibold text-muted-foreground text-xs",
        className
      )}
      data-slot="select-group-label"
      {...rest}
    />
  );
};

export const SelectItem = (
  props: React.ComponentProps<typeof ArkSelect.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkSelect.Item
      className={cn(
        "relative",
        "py-1.5 pr-8 pl-2",
        "text-sm",
        "flex w-full items-center gap-2",
        "rounded-sm",
        "select-none",
        "cursor-default",
        "outline-hidden",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      data-slot="select-item"
      {...rest}
    >
      <ArkSelect.ItemText
        className="flex w-full items-center gap-2"
        data-slot="select-item-text"
      >
        {children}
      </ArkSelect.ItemText>

      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <ArkSelect.ItemIndicator data-slot="select-item-indicator">
          <CheckIcon />
        </ArkSelect.ItemIndicator>
      </span>
    </ArkSelect.Item>
  );
};
