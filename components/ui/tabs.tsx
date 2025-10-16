import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tabsVariants = tv({
  slots: {
    root: "w-full",
    list: [
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
    ],
    trigger: [
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
    ],
    content: [
      "mt-2 ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    ],
  },
});

const { root, list, trigger, content } = tabsVariants();

export interface TabsProps
  extends React.ComponentProps<typeof ArkTabs.Root>,
    VariantProps<typeof tabsVariants> {}

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof ArkTabs.Root>,
  TabsProps
>(({ className, ...props }, ref) => (
  <ArkTabs.Root className={cn(root(), className)} ref={ref} {...props} />
));
TabsRoot.displayName = "Tabs";

const TabsList = React.forwardRef<
  React.ElementRef<typeof ArkTabs.List>,
  React.ComponentProps<typeof ArkTabs.List>
>(({ className, ...props }, ref) => (
  <ArkTabs.List className={cn(list(), className)} ref={ref} {...props} />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof ArkTabs.Trigger>,
  React.ComponentProps<typeof ArkTabs.Trigger>
>(({ className, ...props }, ref) => (
  <ArkTabs.Trigger className={cn(trigger(), className)} ref={ref} {...props} />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof ArkTabs.Content>,
  React.ComponentProps<typeof ArkTabs.Content>
>(({ className, ...props }, ref) => (
  <ArkTabs.Content className={cn(content(), className)} ref={ref} {...props} />
));
TabsContent.displayName = "TabsContent";

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
