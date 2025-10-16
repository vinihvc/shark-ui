import { Portal } from "@ark-ui/react/portal";
import {
  Select as ArkSelect,
  createListCollection,
} from "@ark-ui/react/select";
import { cn } from "fumadocs-ui/utils/cn";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const selectVariants = tv({
  slots: {
    root: "w-full",
    label:
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    control: "relative",
    trigger: [
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
      "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    valueText: "text-left",
    indicator: "h-4 w-4 opacity-50",
    clearTrigger: [
      "-translate-y-1/2 absolute top-1/2 right-8 rounded-sm opacity-70 ring-offset-background",
      "hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
    ],
    positioner: "relative z-50",
    content: [
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    itemGroup: "p-1",
    itemGroupLabel: [
      "px-2 py-1.5 font-semibold text-sm",
      "text-muted-foreground",
    ],
    item: [
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    itemText: "block truncate",
    itemIndicator:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    hiddenSelect: "sr-only",
  },
});

const {
  root,
  label,
  control,
  trigger,
  valueText,
  indicator,
  clearTrigger,
  positioner,
  content,
  itemGroup,
  itemGroupLabel,
  item,
  itemText,
  itemIndicator,
  hiddenSelect,
} = selectVariants();

export interface SelectProps
  extends React.ComponentProps<typeof ArkSelect.Root>,
    VariantProps<typeof selectVariants> {}

const SelectRoot = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Root>,
  SelectProps
>(({ className, ...props }, ref) => (
  <ArkSelect.Root className={cn(root(), className)} ref={ref} {...props} />
));
SelectRoot.displayName = "Select";

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Label>,
  React.ComponentProps<typeof ArkSelect.Label>
>(({ className, ...props }, ref) => (
  <ArkSelect.Label className={cn(label(), className)} ref={ref} {...props} />
));
SelectLabel.displayName = "SelectLabel";

const SelectControl = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Control>,
  React.ComponentProps<typeof ArkSelect.Control>
>(({ className, ...props }, ref) => (
  <ArkSelect.Control
    className={cn(control(), className)}
    ref={ref}
    {...props}
  />
));
SelectControl.displayName = "SelectControl";

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Trigger>,
  React.ComponentProps<typeof ArkSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <ArkSelect.Trigger className={cn(trigger(), className)} ref={ref} {...props}>
    {children}
  </ArkSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectValueText = React.forwardRef<
  React.ElementRef<typeof ArkSelect.ValueText>,
  React.ComponentProps<typeof ArkSelect.ValueText>
>(({ className, ...props }, ref) => (
  <ArkSelect.ValueText
    className={cn(valueText(), className)}
    ref={ref}
    {...props}
  />
));
SelectValueText.displayName = "SelectValueText";

const SelectIndicator = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Indicator>,
  React.ComponentProps<typeof ArkSelect.Indicator>
>(({ className, ...props }, ref) => (
  <ArkSelect.Indicator
    className={cn(indicator(), className)}
    ref={ref}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </ArkSelect.Indicator>
));
SelectIndicator.displayName = "SelectIndicator";

const SelectClearTrigger = React.forwardRef<
  React.ElementRef<typeof ArkSelect.ClearTrigger>,
  React.ComponentProps<typeof ArkSelect.ClearTrigger>
>(({ className, ...props }, ref) => (
  <ArkSelect.ClearTrigger
    className={cn(clearTrigger(), className)}
    ref={ref}
    {...props}
  />
));
SelectClearTrigger.displayName = "SelectClearTrigger";

const SelectPositioner = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Positioner>,
  React.ComponentProps<typeof ArkSelect.Positioner>
>(({ className, ...props }, ref) => (
  <ArkSelect.Positioner
    className={cn(positioner(), className)}
    ref={ref}
    {...props}
  />
));
SelectPositioner.displayName = "SelectPositioner";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Content>,
  React.ComponentProps<typeof ArkSelect.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <SelectPositioner>
      <ArkSelect.Content
        className={cn(content(), className)}
        ref={ref}
        {...props}
      >
        {children}
      </ArkSelect.Content>
    </SelectPositioner>
  </Portal>
));
SelectContent.displayName = "SelectContent";

const SelectItemGroup = React.forwardRef<
  React.ElementRef<typeof ArkSelect.ItemGroup>,
  React.ComponentProps<typeof ArkSelect.ItemGroup>
>(({ className, ...props }, ref) => (
  <ArkSelect.ItemGroup
    className={cn(itemGroup(), className)}
    ref={ref}
    {...props}
  />
));
SelectItemGroup.displayName = "SelectItemGroup";

const SelectItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof ArkSelect.ItemGroupLabel>,
  React.ComponentProps<typeof ArkSelect.ItemGroupLabel>
>(({ className, ...props }, ref) => (
  <ArkSelect.ItemGroupLabel
    className={cn(itemGroupLabel(), className)}
    ref={ref}
    {...props}
  />
));
SelectItemGroupLabel.displayName = "SelectItemGroupLabel";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof ArkSelect.Item>,
  React.ComponentProps<typeof ArkSelect.Item>
>(({ className, children, ...props }, ref) => (
  <ArkSelect.Item className={cn(item(), className)} ref={ref} {...props}>
    {children}
  </ArkSelect.Item>
));
SelectItem.displayName = "SelectItem";

const SelectItemText = React.forwardRef<
  React.ElementRef<typeof ArkSelect.ItemText>,
  React.ComponentProps<typeof ArkSelect.ItemText>
>(({ className, ...props }, ref) => (
  <ArkSelect.ItemText
    className={cn(itemText(), className)}
    ref={ref}
    {...props}
  />
));
SelectItemText.displayName = "SelectItemText";

const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof ArkSelect.ItemIndicator>,
  React.ComponentProps<typeof ArkSelect.ItemIndicator>
>(({ className, ...props }, ref) => (
  <ArkSelect.ItemIndicator
    className={cn(itemIndicator(), className)}
    ref={ref}
    {...props}
  >
    <CheckIcon className="h-4 w-4" />
  </ArkSelect.ItemIndicator>
));
SelectItemIndicator.displayName = "SelectItemIndicator";

const SelectHiddenSelect = React.forwardRef<
  React.ElementRef<typeof ArkSelect.HiddenSelect>,
  React.ComponentProps<typeof ArkSelect.HiddenSelect>
>(({ className, ...props }, ref) => (
  <ArkSelect.HiddenSelect
    className={cn(hiddenSelect(), className)}
    ref={ref}
    {...props}
  />
));
SelectHiddenSelect.displayName = "SelectHiddenSelect";

export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Control: SelectControl,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
  Indicator: SelectIndicator,
  ClearTrigger: SelectClearTrigger,
  Positioner: SelectPositioner,
  Content: SelectContent,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  HiddenSelect: SelectHiddenSelect,
  createListCollection,
};
