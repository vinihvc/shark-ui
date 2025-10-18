import { Menu as ArkMenu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const menuVariants = tv({
  slots: {
    root: "relative",
    trigger: [
      "inline-flex items-center justify-center rounded-md font-medium text-sm",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      "bg-background hover:bg-accent hover:text-accent-foreground",
      "h-10 px-4 py-2",
    ],
    contextTrigger: [
      "inline-flex items-center justify-center rounded-md font-medium text-sm",
      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      "bg-background hover:bg-accent hover:text-accent-foreground",
      "h-10 px-4 py-2",
    ],
    positioner: "relative z-50",
    content: [
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    item: [
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "transition-colors focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    itemText: "flex-1",
    itemIndicator: "ml-auto h-4 w-4",
    itemGroup: "px-1 py-1.5",
    itemGroupLabel: [
      "px-2 py-1.5 font-semibold text-foreground text-sm",
      "first:mt-0 last:mb-0",
    ],
    separator: "my-1 h-px bg-muted",
    arrow: "fill-popover",
    arrowTip: "fill-popover",
  },
});

const {
  root,
  trigger,
  contextTrigger,
  positioner,
  content,
  item,
  itemText,
  itemIndicator,
  itemGroup,
  itemGroupLabel,
  separator,
  arrow,
  arrowTip,
} = menuVariants();

export interface MenuProps
  extends React.ComponentProps<typeof ArkMenu.Root>,
    VariantProps<typeof menuVariants> {}

const MenuRoot = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Root>,
  MenuProps
>(({ className, ...props }, ref) => (
  <ArkMenu.Root className={cn(root(), className)} ref={ref} {...props} />
));
MenuRoot.displayName = "Menu";

const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Trigger>,
  React.ComponentProps<typeof ArkMenu.Trigger>
>(({ className, ...props }, ref) => (
  <ArkMenu.Trigger className={cn(trigger(), className)} ref={ref} {...props} />
));
MenuTrigger.displayName = "MenuTrigger";

const MenuContextTrigger = React.forwardRef<
  React.ElementRef<typeof ArkMenu.ContextTrigger>,
  React.ComponentProps<typeof ArkMenu.ContextTrigger>
>(({ className, ...props }, ref) => (
  <ArkMenu.ContextTrigger
    className={cn(contextTrigger(), className)}
    ref={ref}
    {...props}
  />
));
MenuContextTrigger.displayName = "MenuContextTrigger";

const MenuPositioner = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Positioner>,
  React.ComponentProps<typeof ArkMenu.Positioner>
>(({ className, ...props }, ref) => (
  <ArkMenu.Positioner
    className={cn(positioner(), className)}
    ref={ref}
    {...props}
  />
));
MenuPositioner.displayName = "MenuPositioner";

const MenuContent = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Content>,
  React.ComponentProps<typeof ArkMenu.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <ArkMenu.Content
      className={cn(content(), className)}
      ref={ref}
      {...props}
    />
  </Portal>
));
MenuContent.displayName = "MenuContent";

const MenuItem = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Item>,
  React.ComponentProps<typeof ArkMenu.Item>
>(({ className, ...props }, ref) => (
  <ArkMenu.Item className={cn(item(), className)} ref={ref} {...props} />
));
MenuItem.displayName = "MenuItem";

const MenuItemText = React.forwardRef<
  React.ElementRef<typeof ArkMenu.ItemText>,
  React.ComponentProps<typeof ArkMenu.ItemText>
>(({ className, ...props }, ref) => (
  <ArkMenu.ItemText
    className={cn(itemText(), className)}
    ref={ref}
    {...props}
  />
));
MenuItemText.displayName = "MenuItemText";

const MenuItemIndicator = React.forwardRef<
  React.ElementRef<typeof ArkMenu.ItemIndicator>,
  React.ComponentProps<typeof ArkMenu.ItemIndicator>
>(({ className, ...props }, ref) => (
  <ArkMenu.ItemIndicator
    className={cn(itemIndicator(), className)}
    ref={ref}
    {...props}
  />
));
MenuItemIndicator.displayName = "MenuItemIndicator";

const MenuItemGroup = React.forwardRef<
  React.ElementRef<typeof ArkMenu.ItemGroup>,
  React.ComponentProps<typeof ArkMenu.ItemGroup>
>(({ className, ...props }, ref) => (
  <ArkMenu.ItemGroup
    className={cn(itemGroup(), className)}
    ref={ref}
    {...props}
  />
));
MenuItemGroup.displayName = "MenuItemGroup";

const MenuItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof ArkMenu.ItemGroupLabel>,
  React.ComponentProps<typeof ArkMenu.ItemGroupLabel>
>(({ className, ...props }, ref) => (
  <ArkMenu.ItemGroupLabel
    className={cn(itemGroupLabel(), className)}
    ref={ref}
    {...props}
  />
));
MenuItemGroupLabel.displayName = "MenuItemGroupLabel";

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Separator>,
  React.ComponentProps<typeof ArkMenu.Separator>
>(({ className, ...props }, ref) => (
  <ArkMenu.Separator
    className={cn(separator(), className)}
    ref={ref}
    {...props}
  />
));
MenuSeparator.displayName = "MenuSeparator";

const MenuArrow = React.forwardRef<
  React.ElementRef<typeof ArkMenu.Arrow>,
  React.ComponentProps<typeof ArkMenu.Arrow>
>(({ className, ...props }, ref) => (
  <ArkMenu.Arrow className={cn(arrow(), className)} ref={ref} {...props} />
));
MenuArrow.displayName = "MenuArrow";

const MenuArrowTip = React.forwardRef<
  React.ElementRef<typeof ArkMenu.ArrowTip>,
  React.ComponentProps<typeof ArkMenu.ArrowTip>
>(({ className, ...props }, ref) => (
  <ArkMenu.ArrowTip
    className={cn(arrowTip(), className)}
    ref={ref}
    {...props}
  />
));
MenuArrowTip.displayName = "MenuArrowTip";

// Checkbox and Radio components
const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ArkMenu.CheckboxItem>,
  React.ComponentProps<typeof ArkMenu.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <ArkMenu.CheckboxItem className={cn(item(), className)} ref={ref} {...props}>
    <MenuItemIndicator>
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 13l4 4L19 7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </MenuItemIndicator>
    <MenuItemText>{children}</MenuItemText>
  </ArkMenu.CheckboxItem>
));
MenuCheckboxItem.displayName = "MenuCheckboxItem";

const MenuRadioItemGroup = React.forwardRef<
  React.ElementRef<typeof ArkMenu.RadioItemGroup>,
  React.ComponentProps<typeof ArkMenu.RadioItemGroup>
>(({ className, ...props }, ref) => (
  <ArkMenu.RadioItemGroup
    className={cn(itemGroup(), className)}
    ref={ref}
    {...props}
  />
));
MenuRadioItemGroup.displayName = "MenuRadioItemGroup";

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ArkMenu.RadioItem>,
  React.ComponentProps<typeof ArkMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ArkMenu.RadioItem className={cn(item(), className)} ref={ref} {...props}>
    <MenuItemIndicator>
      <div className="h-2 w-2 rounded-full bg-current" />
    </MenuItemIndicator>
    <MenuItemText>{children}</MenuItemText>
  </ArkMenu.RadioItem>
));
MenuRadioItem.displayName = "MenuRadioItem";

export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  ContextTrigger: MenuContextTrigger,
  Positioner: MenuPositioner,
  Content: MenuContent,
  Item: MenuItem,
  ItemText: MenuItemText,
  ItemIndicator: MenuItemIndicator,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  Separator: MenuSeparator,
  Arrow: MenuArrow,
  ArrowTip: MenuArrowTip,
  CheckboxItem: MenuCheckboxItem,
  RadioItemGroup: MenuRadioItemGroup,
  RadioItem: MenuRadioItem,
};
