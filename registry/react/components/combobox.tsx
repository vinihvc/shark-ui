import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronDown, X } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const Combobox = <T,>(
  props: React.ComponentProps<typeof ArkCombobox.Root<T>>
) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkCombobox.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const ComboboxControl = (
  props: React.ComponentProps<typeof ArkCombobox.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Control className={cn("relative", className)} {...rest} />
  );
};

interface ComboboxInputProps
  extends React.ComponentProps<typeof ArkCombobox.Input> {}

export const ComboboxInput = (props: ComboboxInputProps) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Input className={cn("[input]:pr-16", className)} {...rest} />
  );
};

export const ComboboxTrigger = (
  props: React.ComponentProps<typeof ArkCombobox.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Trigger
      className={cn("absolute inset-y-0 right-1", className)}
      {...rest}
      asChild
    >
      <Button
        className={cn(
          "h-full w-4",
          "px-2",
          "text-muted-foreground",
          "hover:bg-transparent hover:text-foreground"
        )}
        variant="ghost"
      >
        <ChevronDown />
      </Button>
    </ArkCombobox.Trigger>
  );
};

export const ComboboxClearTrigger = (
  props: React.ComponentProps<typeof ArkCombobox.ClearTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ClearTrigger
      className={cn("absolute inset-y-0 right-8", className)}
      {...rest}
      asChild
    >
      <Button
        className={cn(
          "h-full w-4",
          "px-2",
          "text-muted-foreground",
          "hover:bg-transparent hover:text-foreground"
        )}
        variant="ghost"
      >
        <X />
      </Button>
    </ArkCombobox.ClearTrigger>
  );
};

export const ComboboxContent = (
  props: React.ComponentProps<typeof ArkCombobox.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <ArkCombobox.Positioner>
        <ArkCombobox.Content
          className={cn(
            "relative z-50",
            "max-h-96 min-w-48",
            "origin-(--transform-origin)",
            "p-1",
            "bg-popover",
            "text-popover-foreground",
            "rounded-md border shadow-md",
            "overflow-hidden",
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
          {...rest}
        >
          {children}
        </ArkCombobox.Content>
      </ArkCombobox.Positioner>
    </Portal>
  );
};

export const ComboboxItemGroup = (
  props: React.ComponentProps<typeof ArkCombobox.ItemGroup>
) => <ArkCombobox.ItemGroup {...props} />;

export const ComboboxItemGroupLabel = (
  props: React.ComponentProps<typeof ArkCombobox.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroupLabel
      className={cn(
        "px-2 py-1.5 font-semibold text-muted-foreground text-xs",
        className
      )}
      {...rest}
    />
  );
};

export const ComboboxItem = (
  props: React.ComponentProps<typeof ArkCombobox.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Item
      className={cn(
        "relative",
        "py-1.5 pr-8 pl-2",
        "text-sm",
        "flex w-full items-center gap-2",
        "rounded-sm",
        "select-none",
        "cursor-default",
        "outline-hidden",
        "data-[=checked]:bg-accent data-[state=checked]:text-accent-foreground",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...rest}
    >
      <ArkCombobox.ItemText>{children}</ArkCombobox.ItemText>

      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <ArkCombobox.ItemIndicator>
          <CheckIcon />
        </ArkCombobox.ItemIndicator>
      </span>
    </ArkCombobox.Item>
  );
};

export const ComboboxEmpty = (
  props: React.ComponentProps<typeof ArkCombobox.Empty>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Empty
      className={cn("px-2 py-1.5 text-muted-foreground text-sm", className)}
      {...rest}
    >
      {children || "No results found."}
    </ArkCombobox.Empty>
  );
};
