"use client";

import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { SearchIcon } from "lucide-react";
import type React from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { MenuShortcut } from "@/registry/react/components/menu";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { Separator } from "@/registry/react/components/separator";
import type { InputProps } from "./input";

export const CommandDialog = Dialog;

export const CommandDialogTrigger = (
  props: React.ComponentProps<typeof DialogTrigger>
) => {
  return <DialogTrigger data-slot="command-dialog-trigger" {...props} />;
};

interface CommandDialogContentProps
  extends React.ComponentProps<typeof DialogContent> {
  /**
   * The description of the dialog
   *
   * @default "Search for a command to run..."
   */
  description?: string;
  /**
   * The title of the dialog
   *
   * @default "Command Palette"
   */
  title?: string;
}

export const CommandDialogContent = (props: CommandDialogContentProps) => {
  const {
    title = "Command Palette",
    description = "Search for a command to run...",
    className,
    children,
    ...rest
  } = props;

  return (
    <DialogContent
      className={cn("border-0 p-0", className)}
      data-slot="command-dialog-content"
      {...rest}
    >
      <DialogHeader
        className="sr-only"
        description={description}
        title={title}
      />

      {children}
    </DialogContent>
  );
};

export const Command: ArkCombobox.RootComponent = (props) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <Combobox
      className={cn(
        "isolate",
        "p-2",
        "bg-popover",
        "text-popover-foreground",
        "rounded-2xl border",
        className
      )}
      closeOnSelect={false}
      disableLayer
      inputBehavior="autohighlight"
      lazyMount={lazyMount}
      loopFocus={false}
      open
      selectionBehavior="clear"
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

interface CommandInputProps
  extends Omit<React.ComponentProps<typeof ArkCombobox.Input>, "size"> {
  /**
   * The size of the input
   *
   * @default "md"
   */
  size?: InputProps["size"];
}

export const CommandContent = (
  props: React.ComponentProps<typeof ArkCombobox.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Content
      className={cn(
        "max-h-72",
        "outline-none",
        "[:not(.has-[+[data-slot=command-footer]])]:rounded-b-2xl [:not(.has-[+[data-slot=command-footer]])]:border-b",
        className
      )}
      data-slot="command-content"
      {...rest}
    />
  );
};

export const CommandInput = (props: CommandInputProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ComboboxControl className="mb-2">
      <InputGroup className={cn("rounded-xl", className)} size={size} {...rest}>
        <InputGroupAddon>
          <SearchIcon aria-hidden className="opacity-64" />
        </InputGroupAddon>
        <ArkCombobox.Input asChild data-slot="command-input">
          <InputGroupInput autoFocus />
        </ArkCombobox.Input>
      </InputGroup>
    </ComboboxControl>
  );
};

interface CommandListProps extends React.ComponentProps<typeof ComboboxList> {
  /**
   * Whether to apply a fade effect to the scroll area
   *
   * @default false
   */
  scrollFade?: boolean;
}

export const CommandList = (props: CommandListProps) => {
  const { scrollFade = false, className, ...rest } = props;

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ComboboxList
        className={cn("max-h-72 flex-1 pr-3", className)}
        data-slot="command-list"
        {...rest}
      />
    </ScrollArea>
  );
};

export const CommandEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxEmpty
      className={cn("py-6 text-center text-sm", className)}
      data-slot="command-empty"
      {...rest}
    >
      {children || "No results found."}
    </ComboboxEmpty>
  );
};

export const CommandGroup = (
  props: React.ComponentProps<typeof ComboboxGroup>
) => {
  return <ComboboxGroup data-slot="command-group" {...props} />;
};

export const CommandGroupLabel = (
  props: React.ComponentProps<typeof ComboboxGroupLabel>
) => {
  return <ComboboxGroupLabel data-slot="command-group-label" {...props} />;
};

export const CommandItem = (props: ComponentProps<typeof ComboboxItem>) => {
  const { className, ...rest } = props;

  return (
    <ComboboxItem
      className={cn(className)}
      data-slot="command-item"
      persistFocus
      showIndicator={false}
      {...rest}
    />
  );
};

export const CommandSeparator = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <Separator
      className={cn("my-2", className)}
      data-slot="command-separator"
      {...rest}
    />
  );
};

export const CommandShortcut = (
  props: React.ComponentProps<typeof MenuShortcut>
) => {
  return <MenuShortcut data-slot="command-shortcut" {...props} />;
};

export const CommandFooter = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "z-10",
        "flex items-center justify-between gap-2",
        "-m-2 mt-2 px-4 py-3",
        "bg-muted/48",
        "text-muted-foreground text-xs",
        "rounded-b-[calc(var(--radius-2xl,1rem)-1px)] border-t",
        className
      )}
      data-slot="command-footer"
      {...rest}
    />
  );
};
