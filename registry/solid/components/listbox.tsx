import {
  Listbox as ArkListbox,
  useListboxContext,
} from "@ark-ui/solid/listbox";
import { CheckIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { MenuShortcut } from "@/registry/solid/components/menu";

export const useListbox = useListboxContext;

export const Listbox: ArkListbox.RootComponent = (props) => {
  const { class: className, ...rest } = props;

  return (
    <ArkListbox.Root
      class={cn(
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
  props: ComponentProps<typeof ArkListbox.Content>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkListbox.Content
      class={cn(
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
  extends ComponentProps<typeof ArkListbox.Item>,
    VariantProps<typeof listboxItemVariants> {}

export const ListboxItem = (props: ListboxItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkListbox.Item
      class={cn(listboxItemVariants({ variant }), className)}
      data-slot="listbox-item"
      data-variant={variant}
      {...rest}
    />
  );
};

export const ListboxItemText = (
  props: ComponentProps<typeof ArkListbox.ItemText>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkListbox.ItemText
      class={cn(
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
  extends ComponentProps<typeof ArkListbox.ItemGroup> {
  /**
   * The heading of the listbox item group.
   */
  heading?: string;
}

export const ListboxItemGroup = (props: ListboxItemGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ArkListbox.ItemGroup
      class={cn("flex flex-col gap-1", className)}
      data-slot="listbox-item-group"
      {...rest}
    >
      {!!heading && <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>}
      {children}
    </ArkListbox.ItemGroup>
  );
};

export const ListboxItemGroupLabel = (
  props: ComponentProps<typeof ArkListbox.ItemGroupLabel>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkListbox.ItemGroupLabel
      class={cn(
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
  props: ComponentProps<typeof ArkListbox.ValueText>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkListbox.ValueText
      class={cn("font-normal", className)}
      data-slot="listbox-value-text"
      {...rest}
    />
  );
};

export const ListboxItemIndicator = (
  props: ComponentProps<typeof ArkListbox.ItemIndicator>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkListbox.ItemIndicator
      class={cn(
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
  props: ComponentProps<typeof ArkListbox.Empty>
) => {
  const { class: className, ...rest } = props;
  return (
    <ArkListbox.Empty
      class={cn(
        "px-2 py-1.5",
        "text-center text-muted-foreground text-sm",
        className
      )}
      data-slot="listbox-empty"
      {...rest}
    />
  );
};

export const ListboxShortcut = (props: ComponentProps<typeof MenuShortcut>) => {
  return <MenuShortcut data-slot="listbox-shortcut" {...props} />;
};
