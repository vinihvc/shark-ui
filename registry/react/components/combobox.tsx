"use client";

import {
  Combobox as ArkCombobox,
  ComboboxList as ArkComboboxList,
  type CollectionItem,
  useComboboxContext as useArkComboboxContext,
  useListCollection,
} from "@ark-ui/react/combobox";
import { ark } from "@ark-ui/react/factory";
import { useFilter } from "@ark-ui/react/locale";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronDown, XIcon } from "lucide-react";
import React from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import type { inputVariants } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { ScrollArea } from "@/registry/react/components/scroll-area";

/** Default item shape for ComboboxList - provides good inference without explicit typing */
export interface DefaultComboboxItem {
  label: string;
  value: string;
}

interface ComboboxItemsProps<T extends CollectionItem> {
  /**
   * Function to group items. When provided, ComboboxList renders grouped.
   */
  groupBy?: (item: T, index: number) => string;
  /**
   * Array of items. Filtering is handled internally.
   */
  items: T[];
  /**
   * Convert item to display string (for filtering).
   * Defaults to (i) => i.label for { label, value } shape.
   */
  itemToString?: (item: T) => string;
  /**
   * Convert item to value string.
   * Defaults to (i) => i.value for { label, value } shape.
   */
  itemToValue?: (item: T) => string;
}

interface ComboboxProps<
  T extends CollectionItem = { label: string; value: string },
> extends ComboboxItemsProps<T> {
  /**
   * The type of filter to use
   *
   * @default 'base'
   */
  filterType?: Intl.CollatorOptions["sensitivity"];
}

type ComboboxRootProps<T> = Omit<
  React.ComponentProps<typeof ArkCombobox.Root<T>>,
  "collection"
> &
  ComboboxProps<T>;

export const Combobox = <T extends CollectionItem>(
  props: ComboboxRootProps<T>
) => {
  const {
    allowCustomValue = true,
    filterType = "base",
    openOnClick = true,
    groupBy,
    itemToValue = defaultItemToValue as (item: T) => string,
    itemToString = defaultItemToString as (item: T) => string,
    items,
    onInputValueChange,
    onOpenChange,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  const { contains } = useFilter({ sensitivity: filterType });

  const { collection: filteredCollection, filter } = useListCollection({
    filter: contains,
    groupBy,
    initialItems: items,
    itemToString,
    itemToValue,
  });

  const handleInputValueChange = (e: ArkCombobox.InputValueChangeDetails) => {
    filter(e.inputValue);
    onInputValueChange?.(e);
  };

  const handleOpenChange = (e: ArkCombobox.OpenChangeDetails) => {
    filter("");
    onOpenChange?.(e);
  };

  return (
    <ArkCombobox.Root
      allowCustomValue
      collection={filteredCollection}
      data-slot="combobox"
      inputBehavior="autohighlight"
      lazyMount={lazyMount}
      onInputValueChange={handleInputValueChange}
      onOpenChange={handleOpenChange}
      openOnClick={openOnClick}
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
    <ArkCombobox.Control
      className={cn("relative flex flex-wrap items-center gap-1", className)}
      data-slot="combobox-control"
      {...rest}
    />
  );
};

interface ComboboxInputProps
  extends Omit<React.ComponentProps<typeof ArkCombobox.Input>, "size">,
    VariantProps<typeof inputVariants> {
  /**
   * Whether the control is disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to show the clear button.
   *
   * @default false
   */
  showClear?: boolean;
  /**
   * Whether to show the trigger button.
   *
   * @default true
   */
  showTrigger?: boolean;
}

export const ComboboxInput = (props: ComboboxInputProps) => {
  const {
    showTrigger = true,
    showClear = false,
    disabled,
    className,
    children,
    ...rest
  } = props;

  return (
    <ComboboxControl>
      <InputGroup className={cn(className)}>
        <ArkCombobox.Input asChild>
          <InputGroupInput disabled={disabled} {...rest} />
        </ArkCombobox.Input>
        {children}

        <InputGroupAddon align="inline-end">
          {showTrigger && (
            <InputGroupButton
              asChild
              className="group-has-data-[slot=combobox-clear]/input-group:hidden"
              data-slot="input-group-button"
              disabled={disabled}
              size="icon-xs"
              variant="ghost"
            >
              <ComboboxTrigger />
            </InputGroupButton>
          )}
          {showClear && <ComboboxClear disabled={disabled} />}
        </InputGroupAddon>
      </InputGroup>
    </ComboboxControl>
  );
};

export const ComboboxTrigger = (
  props: React.ComponentProps<typeof ArkCombobox.Trigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Trigger
      className={cn("absolute inset-e-1 inset-y-0", className)}
      data-slot="combobox-trigger"
      {...rest}
      asChild
    >
      {children ?? (
        <Button className="size-4" variant="ghost">
          <ChevronDown />
        </Button>
      )}
    </ArkCombobox.Trigger>
  );
};

export const ComboboxClear = (
  props: React.ComponentProps<typeof ArkCombobox.ClearTrigger>
) => {
  return (
    <ArkCombobox.ClearTrigger data-slot="combobox-clear" {...props} asChild>
      <InputGroupButton size="icon-xs" variant="ghost">
        <XIcon className="pointer-events-none" />
      </InputGroupButton>
    </ArkCombobox.ClearTrigger>
  );
};

export const ComboboxPositioner = (
  props: React.ComponentProps<typeof ArkCombobox.Positioner>
) => <ArkCombobox.Positioner data-slot="combobox-positioner" {...props} />;

export const ComboboxContent = (
  props: React.ComponentProps<typeof ArkCombobox.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <ComboboxPositioner>
        <ArkCombobox.Content
          className={cn(
            "relative z-50",
            "max-h-96 min-w-48",
            "origin-(--transform-origin)",
            "p-1",
            "bg-popover",
            "text-popover-foreground",
            "rounded-xl border shadow-lg/5",
            "overflow-hidden",
            "outline-none",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=open]:zoom-in-[98%] data-[state=closed]:zoom-out-[98%]",
            "data-[placement=top]:slide-in-from-bottom-2",
            "data-[placement=bottom]:slide-in-from-top-2",
            "data-[placement=right]:slide-in-from-start-2",
            "data-[placement=left]:slide-in-from-end-2",
            className
          )}
          data-slot="combobox-content"
          {...rest}
        >
          {children}
        </ArkCombobox.Content>
      </ComboboxPositioner>
    </Portal>
  );
};

interface ComboboxGroupProps
  extends React.ComponentProps<typeof ArkCombobox.ItemGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const ComboboxGroup = (props: ComboboxGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkCombobox.ItemGroup data-slot="combobox-group" {...rest}>
      {!!heading && <ComboboxGroupLabel>{heading}</ComboboxGroupLabel>}

      {children}
    </ArkCombobox.ItemGroup>
  );
};

export const ComboboxGroupLabel = (
  props: React.ComponentProps<typeof ArkCombobox.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroupLabel
      className={cn(
        "px-2 py-1.5 font-semibold text-muted-foreground text-xs",
        className
      )}
      data-slot="combobox-group-label"
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
        "py-1.5 ps-2 pe-8",
        "text-sm",
        "flex w-full items-center gap-2",
        "rounded-lg",
        "select-none",
        "cursor-default",
        "outline-hidden",
        "data-[=checked]:bg-accent data-[state=checked]:text-accent-foreground",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot="combobox-item"
      persistFocus
      {...rest}
    >
      <ArkCombobox.ItemText data-slot="combobox-item-text">
        {children}
      </ArkCombobox.ItemText>

      <span className="absolute inset-e-2 flex size-3.5 items-center justify-center">
        <ArkCombobox.ItemIndicator data-slot="combobox-item-indicator">
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
      className={cn(
        "px-2 py-1.5",
        "text-center text-muted-foreground text-sm",
        className
      )}
      data-slot="combobox-empty"
      {...rest}
    >
      {children || "No results found."}
    </ArkCombobox.Empty>
  );
};

interface ComboboxListProps<T extends CollectionItem = DefaultComboboxItem>
  extends Omit<React.ComponentProps<typeof ArkComboboxList>, "children"> {
  /**
   * Render prop that receives each item and returns a ComboboxItem.
   * Use with the simplified `items` API.
   */
  children: (item: T) => React.ReactNode;
}

export const ComboboxList = <T extends CollectionItem = DefaultComboboxItem>(
  props: ComboboxListProps<T>
) => {
  const { children: renderItem, className, ...rest } = props;

  const { collection } = useArkComboboxContext();

  const grouped =
    "group" in collection && typeof collection.group === "function"
      ? (collection.group() as [string, T[]][])
      : null;

  const groupedArray = Array.isArray(grouped) ? grouped : [];
  const items = Array.from(collection.items ?? []);

  return (
    <ScrollArea>
      <ArkComboboxList
        className={cn("flex flex-col", className)}
        data-slot="combobox-list"
        {...rest}
      >
        <ComboboxEmpty />
        {groupedArray.length > 0 ? (
          groupedArray.map(([groupName, groupItems]) => (
            <ComboboxGroup heading={groupName} key={groupName}>
              {(Array.isArray(groupItems) ? groupItems : []).map((item) => (
                <React.Fragment
                  key={collection.getItemValue(item) ?? undefined}
                >
                  {renderItem(item)}
                </React.Fragment>
              ))}
            </ComboboxGroup>
          ))
        ) : (
          <ComboboxGroup>
            {items.map((item) => (
              <React.Fragment key={collection.getItemValue(item) ?? undefined}>
                {renderItem(item as T)}
              </React.Fragment>
            ))}
          </ComboboxGroup>
        )}
      </ArkComboboxList>
    </ScrollArea>
  );
};

export const useComboboxContext = useArkComboboxContext;

interface ComboboxValueTextProps extends React.ComponentProps<typeof ark.span> {
  "data-placeholder"?: string;
}

export const ComboboxValueText = (props: ComboboxValueTextProps) => {
  const {
    "data-placeholder": dataPlaceholder,
    className,
    children,
    ...rest
  } = props;

  const { value, collection } = useArkComboboxContext();

  const labels = React.useMemo(() => {
    const values = (() => {
      if (Array.isArray(value)) {
        return value;
      }
      if (value == null) {
        return [];
      }
      return [value];
    })();
    if (!(collection && values.length)) {
      return [];
    }
    return values
      .map((v) => collection.find(v))
      .filter(Boolean)
      .map((item) =>
        collection.getItemValue(item)
          ? ((
              collection as { getItemLabel?: (i: unknown) => string }
            ).getItemLabel?.(item) ??
            (item as { label?: string }).label ??
            String(item))
          : null
      );
  }, [collection, value]);

  const displayValue = labels.filter(Boolean).join(", ") || children;

  return (
    <ark.span
      className={cn(
        "flex min-w-0 truncate text-nowrap",
        "data-placeholder:text-muted-foreground",
        className
      )}
      data-placeholder={displayValue ? undefined : ""}
      {...rest}
    >
      {displayValue || dataPlaceholder}
    </ark.span>
  );
};

const defaultItemToValue = (item: { label: string; value: string }) =>
  item.value;
const defaultItemToString = (item: { label: string; value: string }) =>
  item.label;
