"use client";

import { useFilter } from "@ark-ui/react";
import {
  Combobox as ArkCombobox,
  useListCollection,
} from "@ark-ui/react/combobox";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { SearchIcon } from "lucide-react";
import React, { type ComponentProps, Fragment } from "react";
import { cn } from "@/lib/utils";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { Separator } from "@/registry/react/components/separator";

export const CommandDialog = Dialog;

export function CommandDialogTrigger(
  props: React.ComponentProps<typeof DialogTrigger>
) {
  return <DialogTrigger data-slot="command-dialog-trigger" {...props} />;
}

export function CommandOverlay({
  className,
  ...props
}: React.ComponentProps<typeof ArkDialog.Backdrop>) {
  return (
    <ArkDialog.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
        className
      )}
      data-slot="command-dialog-backdrop"
      {...props}
    />
  );
}

export const CommandDialogContent = (
  props: React.ComponentProps<typeof DialogContent>
) => {
  const { className, ...rest } = props;

  return (
    <DialogContent
      className={cn(className)}
      data-slot="command-dialog-popup"
      {...rest}
    />
  );
};

export interface CommandItemValue {
  label: string;
  shortcut?: string;
  value: string;
}

export interface CommandGroupValue {
  items: CommandItemValue[];
  value: string;
}

interface CommandContextValue {
  collection: { group: () => Iterable<[string, CommandItemValue[]]> };
  filter: ReturnType<typeof useListCollection>["filter"];
  groupedItems: CommandGroupValue[];
}

const CommandContext = React.createContext<CommandContextValue | null>(null);

interface CommandProps
  extends Omit<ComponentProps<typeof Autocomplete>, "collection"> {
  /**
   * Collection for advanced usage. When not provided with items, must be passed for the command to work.
   */
  collection?: ComponentProps<typeof Autocomplete>["collection"];
  /**
   * Grouped items for the command palette. When provided, collection and filter are created internally.
   */
  items?: CommandGroupValue[];
}

function flattenGroupedItems(
  groupedItems: CommandGroupValue[]
): (CommandItemValue & { __group: string })[] {
  return groupedItems.flatMap((group) =>
    group.items.map((item) => ({ ...item, __group: group.value }))
  );
}

export function Command({
  items: groupedItemsProp,
  collection: collectionProp,
  onInputValueChange: onInputValueChangeProp,
  ...props
}: CommandProps) {
  const { contains } = useFilter({ sensitivity: "base" });

  const flatItems = React.useMemo(
    () => (groupedItemsProp ? flattenGroupedItems(groupedItemsProp) : []),
    [groupedItemsProp]
  );

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.__group,
    initialItems: flatItems,
  });

  const handleInputValueChange = React.useCallback(
    (details: { inputValue: string }) => {
      filter(details.inputValue);
      onInputValueChangeProp?.(details);
    },
    [filter, onInputValueChangeProp]
  );

  const effectiveCollection = collectionProp ?? collection;
  const effectiveOnInputValueChange = collectionProp
    ? onInputValueChangeProp
    : handleInputValueChange;

  const contextValue = React.useMemo<CommandContextValue>(
    () => ({
      collection: effectiveCollection as {
        group: () => Iterable<[string, CommandItemValue[]]>;
      },
      filter,
      groupedItems: groupedItemsProp ?? [],
    }),
    [effectiveCollection, filter, groupedItemsProp]
  );

  return (
    <CommandContext.Provider value={contextValue}>
      <Autocomplete
        collection={
          effectiveCollection as ComponentProps<
            typeof Autocomplete
          >["collection"]
        }
        data-slot="command"
        disableLayer
        inputBehavior="autohighlight"
        onInputValueChange={effectiveOnInputValueChange}
        open
        {...props}
      />
    </CommandContext.Provider>
  );
}

export function CommandInput({
  className,
  placeholder,
  ...props
}: React.ComponentProps<typeof AutocompleteInput>) {
  return (
    <div className="px-2.5 py-1.5">
      <AutocompleteInput
        autoFocus
        className={cn(
          "border-transparent bg-transparent shadow-none outline-none focus:ring-0",
          className
        )}
        placeholder={placeholder}
        size="lg"
        startAddon={<SearchIcon />}
        {...props}
      />
    </div>
  );
}

interface CommandListProps
  extends Omit<ComponentProps<typeof AutocompleteList>, "children"> {
  children: (group: CommandGroupValue, index: number) => React.ReactNode;
}

export function CommandList({
  className,
  children,
  ...props
}: CommandListProps) {
  const { collection } = useCommandContext();

  return (
    <AutocompleteList
      className={cn(
        "max-h-64 not-empty:scroll-py-2 overflow-y-auto p-2",
        className
      )}
      data-slot="command-list"
      {...props}
    >
      {Array.from(
        (
          collection as { group: () => Iterable<[string, CommandItemValue[]]> }
        ).group()
      ).map(([groupKey, groupItems], index) =>
        children(
          {
            items: groupItems,
            value: groupKey,
          },
          index
        )
      )}
    </AutocompleteList>
  );
}

export function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteEmpty>) {
  return (
    <AutocompleteEmpty
      className={cn("py-6", className)}
      data-slot="command-empty"
      {...props}
    />
  );
}

export function CommandPanel({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ArkCombobox.Content
      className={cn(
        "relative -mx-px min-h-0 rounded-t-xl border border-b-0 bg-popover shadow-sm",
        "overflow-y-auto outline-none",
        "[:not(.has-[+[data-slot=command-footer]])]:rounded-b-2xl [:not(.has-[+[data-slot=command-footer]])]:border-b",
        className
      )}
      data-slot="command-panel"
      {...props}
    >
      {children}
    </ArkCombobox.Content>
  );
}

export function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteGroup>) {
  return (
    <AutocompleteGroup
      className={className}
      data-slot="command-group"
      {...props}
    />
  );
}

export function CommandGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteGroupLabel>) {
  return (
    <AutocompleteGroupLabel
      className={cn(
        "px-2 py-1.5 font-semibold text-muted-foreground text-xs",
        className
      )}
      data-slot="command-group-label"
      {...props}
    />
  );
}

interface CommandCollectionProps {
  children: (item: CommandItemValue) => React.ReactNode;
  items: CommandItemValue[];
}

export function CommandCollection({ children, items }: CommandCollectionProps) {
  return (
    <>
      {items.map((item) => (
        <Fragment key={item.value}>{children(item)}</Fragment>
      ))}
    </>
  );
}

export function CommandItem({
  className,
  item,
  ...props
}: React.ComponentProps<typeof AutocompleteItem> & {
  item?: CommandItemValue;
}) {
  return (
    <AutocompleteItem
      className={cn("py-1.5", className)}
      data-slot="command-item"
      item={item}
      showIndicator={false}
      {...props}
    />
  );
}

export function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={cn("my-2", className)}
      data-slot="command-separator"
      {...props}
    />
  );
}

export function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "ms-auto font-medium font-sans text-muted-foreground/72 text-xs tracking-widest",
        className
      )}
      data-slot="command-shortcut"
      {...props}
    />
  );
}

export function CommandFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 rounded-b-[calc(var(--radius-2xl,1rem)-1px)] border-t px-5 py-3 text-muted-foreground text-xs",
        className
      )}
      data-slot="command-footer"
      {...props}
    />
  );
}

function useCommandContext() {
  const context = React.useContext(CommandContext);

  if (!context) {
    throw new Error("Command components must be used within a Command");
  }
  return context;
}
