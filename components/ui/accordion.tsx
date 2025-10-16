import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const accordionVariants = tv({
  slots: {
    root: "w-full",
    item: "border-border border-b",
    trigger: [
      "flex w-full items-center justify-between py-4 font-medium transition-all",
      "hover:bg-accent/50",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&[data-state=open]>svg]:rotate-180",
    ],
    content: [
      "overflow-hidden text-sm transition-all",
      "data-[state=closed]:animate-accordion-up",
      "data-[state=open]:animate-accordion-down",
    ],
    indicator: "h-4 w-4 shrink-0 transition-transform duration-200",
  },
});

const { root, item, trigger, content, indicator } = accordionVariants();

export interface AccordionProps
  extends React.ComponentProps<typeof ArkAccordion.Root>,
    VariantProps<typeof accordionVariants> {}

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.Root>,
  AccordionProps
>(({ className, ...props }, ref) => (
  <ArkAccordion.Root className={cn(root(), className)} ref={ref} {...props} />
));
AccordionRoot.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.Item>,
  React.ComponentProps<typeof ArkAccordion.Item>
>(({ className, ...props }, ref) => (
  <ArkAccordion.Item className={cn(item(), className)} ref={ref} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.ItemTrigger>,
  React.ComponentProps<typeof ArkAccordion.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  <ArkAccordion.ItemTrigger
    className={cn(trigger(), className)}
    ref={ref}
    {...props}
  >
    {children}
  </ArkAccordion.ItemTrigger>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.ItemContent>,
  React.ComponentProps<typeof ArkAccordion.ItemContent>
>(({ className, children, ...props }, ref) => (
  <ArkAccordion.ItemContent
    className={cn(content(), className)}
    ref={ref}
    {...props}
  >
    <div className="pt-0 pb-4">{children}</div>
  </ArkAccordion.ItemContent>
));
AccordionContent.displayName = "AccordionContent";

const AccordionIndicator = React.forwardRef<
  React.ElementRef<typeof ArkAccordion.ItemIndicator>,
  React.ComponentProps<typeof ArkAccordion.ItemIndicator>
>(({ className, ...props }, ref) => (
  <ArkAccordion.ItemIndicator
    className={cn(indicator(), className)}
    ref={ref}
    {...props}
  />
));
AccordionIndicator.displayName = "AccordionIndicator";

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionTrigger,
  ItemContent: AccordionContent,
  ItemIndicator: AccordionIndicator,
};
