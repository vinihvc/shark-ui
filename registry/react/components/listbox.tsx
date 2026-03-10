"use client";

import { ark } from "@ark-ui/react";
import {
  Listbox as ArkListbox,
  createListCollection as createListCollectionArk,
} from "@ark-ui/react/listbox";
import { CheckIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const createListCollection = createListCollectionArk;

export const Listbox: ArkListbox.RootComponent = (props) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.Root
      className={cn(
        "w-full",
        "flex flex-col gap-1.5",
        "text-foreground",
        className
      )}
      data-slot="listbox"
      {...rest}
    />
  );
};

export const ListboxContent = (
  props: React.ComponentProps<typeof ArkListbox.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.Content
      className={cn(
        "w-full",
        "flex flex-col gap-1",
        "outline-hidden",
        "overflow-hidden",
        "data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:flex-row",
        className
      )}
      data-slot="listbox-content"
      {...rest}
    />
  );
};

const listboxItemVariants = tv({
  base: [
    "group/listbox-item",
    "relative",
    "flex items-center gap-2",
    "px-2.5 py-2",
    "rounded-xl",
    "select-none text-sm",
    "cursor-pointer",
    "outline-hidden",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: [
        "text-popover-foreground",
        "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
        "hover:bg-accent hover:text-accent-foreground",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      ],
      destructive: [
        "text-destructive dark:text-destructive-foreground",
        "hover:bg-destructive/10 dark:hover:bg-destructive-foreground/10",
        "data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10",
        "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ListboxItemProps
  extends React.ComponentProps<typeof ArkListbox.Item>,
    VariantProps<typeof listboxItemVariants> {}

export const ListboxItem = (props: ListboxItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkListbox.Item
      className={cn(listboxItemVariants({ variant }), className)}
      data-slot="listbox-item"
      data-variant={variant}
      {...rest}
    />
  );
};

export const ListboxItemText = (
  props: React.ComponentProps<typeof ArkListbox.ItemText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.ItemText
      className={cn(
        "min-w-0",
        "flex-1",
        "text-ellipsis whitespace-nowrap",
        "overflow-hidden",
        className
      )}
      data-slot="listbox-item-text"
      {...rest}
    />
  );
};

interface ListboxItemGroupProps
  extends React.ComponentProps<typeof ArkListbox.ItemGroup> {
  /**
   * The heading of the listbox item group.
   */
  heading?: string;
}

export const ListboxItemGroup = (props: ListboxItemGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ArkListbox.ItemGroup
      className={cn("flex flex-col gap-1", className)}
      data-slot="listbox-item-group"
      {...rest}
    >
      {!!heading && <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>}
      {children}
    </ArkListbox.ItemGroup>
  );
};

export const ListboxItemGroupLabel = (
  props: React.ComponentProps<typeof ArkListbox.ItemGroupLabel>
) => {
  const { className, ...rest } = props;
  return (
    <ArkListbox.ItemGroupLabel
      className={cn(
        "px-2.5 py-2",
        "font-medium text-muted-foreground",
        "pointer-events-none",
        className
      )}
      data-slot="listbox-item-group-label"
      {...rest}
    />
  );
};

export const ListboxValueText = (
  props: React.ComponentProps<typeof ArkListbox.ValueText>
) => {
  const { className, ...rest } = props;
  return (
    <ArkListbox.ValueText
      className={cn("font-normal", className)}
      data-slot="listbox-value-text"
      {...rest}
    />
  );
};

export const ListboxItemIndicator = (
  props: React.ComponentProps<typeof ArkListbox.ItemIndicator>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkListbox.ItemIndicator
      className={cn(
        "flex shrink-0 items-center justify-center",
        "[&_svg]:text-primary!",
        "zoom-in-95 fade-in-0 animate-in",
        className
      )}
      data-slot="listbox-item-indicator"
      {...rest}
    >
      {children ?? <CheckIcon />}
    </ArkListbox.ItemIndicator>
  );
};

export const ListboxEmpty = (
  props: React.ComponentProps<typeof ArkListbox.Empty>
) => {
  const { className, ...rest } = props;
  return (
    <ArkListbox.Empty
      className={cn(
        "px-2 py-1.5",
        "text-center text-muted-foreground text-sm",
        className
      )}
      data-slot="listbox-empty"
      {...rest}
    />
  );
};

export const ListboxShortcut = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "ms-auto rtl:me-auto",
        "text-muted-foreground text-xs tracking-widest",
        "group-data-highlighted/listbox-item:group-data-[variant=destructive]/listbox-item:text-destructive dark:group-data-highlighted/listbox-item:group-data-[variant=destructive]/listbox-item:text-destructive-foreground",
        className
      )}
      data-slot="listbox-shortcut"
      {...rest}
    />
  );
};
