"use client";

import { ComboboxItem, ComboboxItemText } from "@ark-ui/react/combobox";
import { ark } from "@ark-ui/react/factory";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
} from "./combobox";

export const Command = <T extends { label: string; value: string }>(
  props: React.ComponentProps<typeof Combobox<T>>
) => {
  const { open = true, ...rest } = props;

  return (
    <Combobox
      className={cn(
        "flex flex-col",
        "size-full md:min-w-[450px]",
        "bg-popover",
        "text-popover-foreground",
        "rounded-lg",
        "overflow-hidden"
      )}
      data-slot="command"
      disableLayer
      inputBehavior="autohighlight"
      loopFocus={false}
      open={open}
      selectionBehavior="clear"
      {...rest}
    />
  );
};

export const CommandContent = (
  props: React.ComponentProps<typeof ComboboxContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxContent
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden",
        className
      )}
      data-slot="command"
      {...rest}
    >
      {children}
    </ComboboxContent>
  );
};

export const CommandItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxItem data-slot="command-item" persistFocus {...rest}>
      <ComboboxItemText
        className={cn(
          "relative",
          "flex items-center gap-2",
          "px-2 py-1.5",
          "select-none text-sm",
          "cursor-default",
          "outline-hidden",
          "rounded-sm",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-slot="command-item-text"
      >
        {children}
      </ComboboxItemText>
    </ComboboxItem>
  );
};

export const CommandControl = (
  props: React.ComponentProps<typeof ComboboxControl>
) => <ComboboxControl data-slot="command-control" {...props} />;

export const CommandInput = (
  props: React.ComponentProps<typeof ComboboxInput>
) => {
  const { className, ...rest } = props;

  return (
    <div className="flex h-9 items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 opacity-64" />

      <ComboboxInput
        className={cn(
          "h-10 w-full",
          "flex",
          "py-3",
          "bg-transparent",
          "text-sm",
          "outline-hidden",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-64",
          className
        )}
        data-slot="command-input"
        {...rest}
      />
    </div>
  );
};

export const CommandEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => {
  const { className, ...rest } = props;

  return (
    <ComboboxEmpty
      className={cn("py-6 text-center text-sm", className)}
      data-slot="command-empty"
      {...rest}
    />
  );
};

interface CommandGroupProps extends React.ComponentProps<typeof ComboboxGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const CommandGroup = (props: CommandGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ComboboxGroup
      className={cn(
        "overflow-hidden p-1 text-foreground data-empty:hidden",
        className
      )}
      data-slot="command-group"
      {...rest}
    >
      {!!heading && (
        <ComboboxGroupLabel
          className="px-2 py-1.5 font-medium text-muted-foreground text-xs"
          data-slot="command-group-label"
          {...props}
        >
          {heading}
        </ComboboxGroupLabel>
      )}

      {children}
    </ComboboxGroup>
  );
};

export const CommandShortcut = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "ms-auto text-muted-foreground text-xs tracking-widest rtl:me-auto",
        className
      )}
      data-slot="command-shortcut"
      {...rest}
    />
  );
};
