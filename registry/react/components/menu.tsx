import { ark, Portal } from "@ark-ui/react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const Menu = (props: React.ComponentProps<typeof ArkMenu.Root>) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkMenu.Root
      data-slot="menu"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const MenuTrigger = (
  props: React.ComponentProps<typeof ArkMenu.Trigger>
) => <ArkMenu.Trigger data-slot="menu-trigger" {...props} />;

export const menuContentVariants = tv({
  base: [
    "z-(--z-index)",
    "h-auto min-w-32",
    "p-1",
    "bg-popover",
    "text-popover-foreground",
    "rounded-md border shadow-md",
    "origin-(--transform-origin)",
    "outline-none",
    "overflow-y-auto overflow-x-hidden",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2",
    "data-[side=top]:slide-in-from-bottom-2",
  ],
});

interface MenuContentProps
  extends React.ComponentProps<typeof ArkMenu.Content>,
    VariantProps<typeof menuContentVariants> {
  /**
   * Whether to show the arrow
   *
   * @default true
   */
  showArrow?: boolean;
}

export const MenuPositioner = (
  props: React.ComponentProps<typeof ArkMenu.Positioner>
) => <ArkMenu.Positioner data-slot="menu-positioner" {...props} />;

export const MenuContent = (props: MenuContentProps) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <MenuPositioner>
        <ArkMenu.Content
          className={cn(menuContentVariants(), className)}
          data-slot="menu-content"
          {...rest}
        >
          {children}
        </ArkMenu.Content>
      </MenuPositioner>
    </Portal>
  );
};

interface MenuGroupProps
  extends React.ComponentProps<typeof ArkMenu.ItemGroup> {
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
  props: React.ComponentProps<typeof ArkMenu.Separator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Separator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      data-slot="menu-separator"
      {...rest}
    />
  );
};

const menuItemVariants = tv({
  base: [
    "group/menu-item",
    "relative",
    "px-2 py-1.5",
    "w-full",
    "flex items-center gap-2 rounded-sm",
    "text-sm",
    "select-none outline-hidden",
    "group-data-[date=open]/trigger-item:bg-accent group-data-[date=open]/trigger-item:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: [
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      ],
      destructive: [
        "text-destructive",
        "data-highlighted:bg-destructive/10",
        "dark:data-highlighted:bg-destructive/20",
        "*:[svg]:text-destructive!",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface MenuItemProps
  extends React.ComponentProps<typeof ArkMenu.Item>,
    VariantProps<typeof menuItemVariants> {}

export const MenuItem = (props: MenuItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkMenu.Item
      className={cn(menuItemVariants({ variant }), className)}
      data-variant={variant}
      {...rest}
    />
  );
};

export const MenuCheckboxItem = (
  props: React.ComponentProps<typeof ArkMenu.CheckboxItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkMenu.CheckboxItem
      className={cn(
        menuItemVariants({ variant: "default" }),
        "pl-8",
        className
      )}
      {...rest}
    >
      <ArkMenu.ItemIndicator className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <Check />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText>{children}</ArkMenu.ItemText>
    </ArkMenu.CheckboxItem>
  );
};

interface MenuRadioGroupProps
  extends React.ComponentProps<typeof ArkMenu.RadioItemGroup> {
  /**
   * The heading of the menu radio item group.
   */
  heading?: string;
}

export const MenuRadioGroup = (props: MenuRadioGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkMenu.RadioItemGroup data-slot="menu-radio-group" {...rest}>
      {!!heading && (
        <MenuGroupLabel data-slot="menu-radio-group-label">
          {heading}
        </MenuGroupLabel>
      )}

      {children}
    </ArkMenu.RadioItemGroup>
  );
};

const MenuGroupLabel = (
  props: React.ComponentProps<typeof ArkMenu.ItemGroupLabel>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkMenu.ItemGroupLabel
      className={cn(
        "pointer-events-none px-2 py-1.5 font-medium text-muted-foreground text-sm",
        className
      )}
      data-slot="menu-group-label"
      {...rest}
    >
      {children}
    </ArkMenu.ItemGroupLabel>
  );
};

export const MenuRadioItem = (
  props: React.ComponentProps<typeof ArkMenu.RadioItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkMenu.RadioItem
      className={cn(
        menuItemVariants({ variant: "default" }),
        "pl-8",
        className
      )}
      data-slot="menu-radio-item"
      {...rest}
    >
      <ArkMenu.ItemIndicator
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"
        data-slot="menu-radio-item-indicator"
      >
        <Circle className="size-2 fill-current" />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText data-slot="menu-radio-item-text">
        {children}
      </ArkMenu.ItemText>
    </ArkMenu.RadioItem>
  );
};

export const MenuSub = (props: React.ComponentProps<typeof Menu>) => (
  <Menu data-slot="menu-sub" {...props} />
);

export const MenuSubContent = (
  props: React.ComponentProps<typeof ArkMenu.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <MenuPositioner data-slot="menu-sub-positioner">
        <ArkMenu.Content
          className={cn(menuContentVariants(), className)}
          data-slot="menu-sub-content"
          {...rest}
        />
      </MenuPositioner>
    </Portal>
  );
};

export const MenuSubTrigger = (
  props: React.ComponentProps<typeof ArkMenu.TriggerItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkMenu.TriggerItem
      className={cn(menuItemVariants({ variant: "default" }), className)}
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

export const MenuShortcut = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "ml-auto",
        "text-muted-foreground text-xs tracking-widest",
        "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive",
        className
      )}
      data-slot="menu-shortcut"
      {...rest}
    />
  );
};

export const MenuArrow = (
  props: React.ComponentProps<typeof ArkMenu.Arrow>
) => {
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
      <ArkMenu.ArrowTip className="border-t border-l" />
    </ArkMenu.Arrow>
  );
};
