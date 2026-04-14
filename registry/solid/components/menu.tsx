import { ark } from "@ark-ui/solid/factory";
import {
  Menu as ArkMenu,
  type MenuContentProps,
  useMenuContext,
} from "@ark-ui/solid/menu";
import { CheckIcon, ChevronRight } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useMenu = useMenuContext;

export const Menu = (props: ComponentProps<typeof ArkMenu.Root>) => {
  const {
    lazyMount = true,
    positioning = { placement: "bottom-end" },
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <ArkMenu.Root
      data-slot="menu"
      lazyMount={lazyMount}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const MenuTrigger = (props: ComponentProps<typeof ArkMenu.Trigger>) => (
  <ArkMenu.Trigger data-slot="menu-trigger" {...props} />
);

export const MenuPositioner = (
  props: ComponentProps<typeof ArkMenu.Positioner>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMenu.Positioner
      class={cn("outline-none", className)}
      data-slot="menu-positioner"
      {...rest}
    />
  );
};

export const menuContentVariants = tv({
  base: [
    "z-[calc(50+var(--nested-layer-count,0))]",
    "max-h-(--available-height) not-[class*='w-']:min-w-32",
    "p-1",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/5",
    "origin-(--transform-origin)",
    "outline-none",
    "overflow-y-auto",
    "duration-100",
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-[98%]",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=left]:slide-in-from-end-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=top]:slide-in-from-bottom-2",
  ],
});

export const MenuContent = (props: MenuContentProps) => {
  const { class: className, children, ...rest } = props;

  return (
    <>
      <MenuPositioner>
        <ArkMenu.Content
          class={cn(menuContentVariants(), className)}
          data-slot="menu-content"
          {...rest}
        >
          {children}
        </ArkMenu.Content>
      </MenuPositioner>
    </>
  );
};

interface MenuGroupProps extends ComponentProps<typeof ArkMenu.ItemGroup> {
  /**
   * The heading of the menu item group.
   */
  heading?: string;
}

export const MenuGroup = (props: MenuGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkMenu.ItemGroup data-slot="menu-group" {...rest}>
      {!!heading && <MenuGroupLabel>{heading}</MenuGroupLabel>}

      {children}
    </ArkMenu.ItemGroup>
  );
};

export const MenuSeparator = (
  props: ComponentProps<typeof ArkMenu.Separator>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMenu.Separator
      class={cn("my-1 h-px bg-border", className)}
      data-slot="menu-separator"
      {...rest}
    />
  );
};

const menuItemVariants = tv({
  base: [
    "group/menu-item",
    "relative",
    "w-full",
    "px-2.5 py-1.5",
    "flex items-center gap-2",
    "select-none text-sm",
    "rounded-lg",
    "outline-hidden",
    "group-data-[date=open]/trigger-item:bg-accent group-data-[date=open]/trigger-item:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: [
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      ],
      destructive: [
        "text-destructive dark:text-destructive-foreground",
        "data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10",
        "**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface MenuItemProps
  extends ComponentProps<typeof ArkMenu.Item>,
    VariantProps<typeof menuItemVariants> {}

export const MenuItem = (props: MenuItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkMenu.Item
      class={cn(menuItemVariants({ variant }), className)}
      data-variant={variant}
      {...rest}
    />
  );
};

export const MenuQuickItem = (props: MenuItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkMenu.Item
      class={cn(
        menuItemVariants({ variant }),
        "flex-col gap-1",
        "[&_svg:not([class*='size-'])]:size-4.5",
        className
      )}
      {...rest}
    />
  );
};

export const MenuCheckboxItem = (
  props: ComponentProps<typeof ArkMenu.CheckboxItem>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkMenu.CheckboxItem
      class={cn(menuItemVariants({ variant: "default" }), "ps-8", className)}
      {...rest}
    >
      <ArkMenu.ItemIndicator class="pointer-events-none absolute inset-s-2 flex size-3.5 items-center justify-center">
        <CheckIcon />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText>{children}</ArkMenu.ItemText>
    </ArkMenu.CheckboxItem>
  );
};

interface MenuRadioGroupProps
  extends ComponentProps<typeof ArkMenu.RadioItemGroup> {
  /**
   * The heading of the menu radio item group.
   */
  heading?: string;
}

export const MenuRadioGroup = (props: MenuRadioGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkMenu.RadioItemGroup data-slot="menu-radio-group" {...rest}>
      {!!heading && <MenuGroupLabel>{heading}</MenuGroupLabel>}

      {children}
    </ArkMenu.RadioItemGroup>
  );
};

export const MenuGroupLabel = (
  props: ComponentProps<typeof ArkMenu.ItemGroupLabel>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMenu.ItemGroupLabel
      class={cn(
        "px-2 py-1.5",
        "font-medium text-muted-foreground text-sm",
        "pointer-events-none",
        className
      )}
      data-slot="menu-group-label"
      {...rest}
    />
  );
};

export const MenuRadioItem = (
  props: ComponentProps<typeof ArkMenu.RadioItem>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkMenu.RadioItem
      class={cn(menuItemVariants({ variant: "default" }), "ps-8", className)}
      data-slot="menu-radio-item"
      {...rest}
    >
      <ArkMenu.ItemIndicator class="pointer-events-none absolute inset-s-2 flex size-3.5 items-center justify-center">
        <CheckIcon />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText data-slot="menu-radio-item-text">
        {children}
      </ArkMenu.ItemText>
    </ArkMenu.RadioItem>
  );
};

export const MenuSub = (props: ComponentProps<typeof Menu>) => (
  <Menu data-slot="menu-sub" {...props} />
);

export const MenuSubContent = (
  props: ComponentProps<typeof ArkMenu.Content>
) => {
  const { class: className, ...rest } = props;

  return (
    <>
      <MenuPositioner data-slot="menu-sub-positioner">
        <ArkMenu.Content
          class={cn(menuContentVariants(), className)}
          data-slot="menu-sub-content"
          {...rest}
        />
      </MenuPositioner>
    </>
  );
};

export const MenuSubTrigger = (
  props: ComponentProps<typeof ArkMenu.TriggerItem>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkMenu.TriggerItem
      class={cn(menuItemVariants({ variant: "default" }), className)}
      data-slot="menu-sub-trigger"
      {...rest}
    >
      {children}

      <MenuShortcut>
        <ChevronRight />
      </MenuShortcut>
    </ArkMenu.TriggerItem>
  );
};

export const MenuShortcut = (props: ComponentProps<typeof ark.span>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.span
      class={cn(
        "ms-auto rtl:me-auto",
        "text-muted-foreground text-xs tracking-widest",
        "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive dark:group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive-foreground",
        className
      )}
      data-slot="menu-shortcut"
      {...rest}
    />
  );
};

export const MenuArrow = (props: ComponentProps<typeof ArkMenu.Arrow>) => {
  const { style, ...rest } = props;

  return (
    <ArkMenu.Arrow
      style={
        {
          "--arrow-background": "var(--popover)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
          left: "20px",
        } as React.CSSProperties
      }
      {...rest}
    >
      <ArkMenu.ArrowTip class="border-s border-t" />
    </ArkMenu.Arrow>
  );
};
