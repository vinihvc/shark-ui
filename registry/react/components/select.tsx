import { Portal } from "@ark-ui/react";
import { Select as ArkSelect } from "@ark-ui/react/select";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Select = (props: React.ComponentProps<typeof ArkSelect.Root>) => {
  const { className, children, ...rest } = props;

  return (
    <ArkSelect.Root className={cn(className)} {...rest}>
      {children}

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
};

export const SelectLabel = (
  props: React.ComponentProps<typeof ArkSelect.Label>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.Label
      className={cn(
        "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...rest}
    />
  );
};

export const SelectControl = (
  props: React.ComponentProps<typeof ArkSelect.Control>
) => {
  const { className, ...rest } = props;

  return <ArkSelect.Control className={cn(className)} {...rest} />;
};

interface SelectTriggerProps
  extends React.ComponentProps<typeof ArkSelect.Trigger> {
  /**
   * The size of the select trigger
   *
   * @default "md"
   */
  size?: "md" | "sm" | "lg";
}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { size = "md", className, children, ...rest } = props;

  return (
    <SelectControl>
      <ArkSelect.Trigger
        className={cn(
          "flex w-fit items-center justify-between gap-2",
          "rounded-md px-3 py-2",
          "whitespace-nowrap text-sm",
          "border border-input bg-transparent",
          "shadow-xs outline-none transition-[color,box-shadow]",
          "data-[placeholder-shown]:text-muted-foreground",
          "data-[size=lg]:h-10 data-[size=md]:h-9 data-[size=sm]:h-8",
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
          "*:data-[part=value-text]:line-clamp-1 *:data-[part=value-text]:flex *:data-[part=value-text]:items-center *:data-[part=value-text]:gap-2",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-size={size}
        {...rest}
      >
        {children}

        <ArkSelect.Indicator>
          <ChevronsUpDown />
        </ArkSelect.Indicator>
      </ArkSelect.Trigger>
    </SelectControl>
  );
};

export const SelectValueText = (
  props: React.ComponentProps<typeof ArkSelect.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ValueText className={cn("text-left", className)} {...rest} />
  );
};

export const SelectClearTrigger = (
  props: React.ComponentProps<typeof ArkSelect.ClearTrigger>
) => {
  const { className, ...rest } = props;

  return <ArkSelect.ClearTrigger className={cn(className)} {...rest} />;
};

export const SelectPositioner = (
  props: React.ComponentProps<typeof ArkSelect.Positioner>
) => {
  const { className, ...rest } = props;

  return <ArkSelect.Positioner className={cn(className)} {...rest} />;
};

export const SelectContent = (
  props: React.ComponentProps<typeof ArkSelect.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <SelectPositioner>
        <ArkSelect.Content
          className={cn(
            "relative z-50",
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
        >
          {children}
        </ArkSelect.Content>
      </SelectPositioner>
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
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
