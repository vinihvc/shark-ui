import { Portal } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react/select";
import { CheckIcon, ChevronsUpDown, X } from "lucide-react";
import type React from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { inputVariants } from "./input";

export const Select = <T,>(
  props: React.ComponentProps<typeof ArkSelect.Root<T>>
) => {
  const { lazyMount = true, unmountOnExit = true, children, ...rest } = props;

  return (
    <ArkSelect.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {children}

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
};

export const SelectControl = (
  props: React.ComponentProps<typeof ArkSelect.Control>
) => {
  const { className, ...rest } = props;

  return <ArkSelect.Control className={cn("relative", className)} {...rest} />;
};

interface SelectTriggerProps
  extends React.ComponentProps<typeof ArkSelect.Trigger>,
    VariantProps<typeof inputVariants> {}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { size = "md", className, children, ...rest } = props;

  return (
    <ArkSelect.Trigger
      className={cn(
        inputVariants({ size }),
        "w-fit",
        "flex items-center justify-between gap-2",
        "data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/50",
        "data-placeholder-shown:text-muted-foreground",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...rest}
    >
      {children}

      <ArkSelect.Indicator>
        <ChevronsUpDown />
      </ArkSelect.Indicator>
    </ArkSelect.Trigger>
  );
};

export const SelectValueText = (
  props: React.ComponentProps<typeof ArkSelect.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ValueText
      className={cn("line-clamp-1 flex items-center gap-2", className)}
      {...rest}
    />
  );
};

export const SelectClearTrigger = (
  props: React.ComponentProps<typeof ArkSelect.ClearTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ClearTrigger
      className={cn("-translate-y-1/2 absolute top-1/2 right-8", className)}
      {...rest}
      asChild
    >
      <Button
        className={cn(
          "h-6 w-4",
          "text-muted-foreground",
          "hover:bg-transparent hover:text-foreground"
        )}
        variant="ghost"
      >
        <X />
      </Button>
    </ArkSelect.ClearTrigger>
  );
};

export const SelectContent = (
  props: React.ComponentProps<typeof ArkSelect.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <ArkSelect.Positioner>
        <ArkSelect.Content
          className={cn(
            "z-50",
            "relative",
            "max-h-96 min-w-48",
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
        />
      </ArkSelect.Positioner>
    </Portal>
  );
};

export const SelectItemGroup = (
  props: React.ComponentProps<typeof ArkSelect.ItemGroup>
) => <ArkSelect.ItemGroup {...props} />;

export const SelectItemGroupLabel = (
  props: React.ComponentProps<typeof ArkSelect.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ItemGroupLabel
      className={cn(
        "px-2 py-1.5 font-semibold text-muted-foreground text-xs",
        className
      )}
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
        "data-[=checked]:bg-accent data-[state=checked]:text-accent-foreground",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...rest}
    >
      <ArkSelect.ItemText>{children}</ArkSelect.ItemText>

      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <ArkSelect.ItemIndicator>
          <CheckIcon />
        </ArkSelect.ItemIndicator>
      </span>
    </ArkSelect.Item>
  );
};
