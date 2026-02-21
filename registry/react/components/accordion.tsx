import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Accordion = (
  props: React.ComponentProps<typeof ArkAccordion.Root>
) => {
  const {
    collapsible = true,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <ArkAccordion.Root
      collapsible={collapsible}
      data-slot="accordion"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const AccordionItem = (
  props: React.ComponentProps<typeof ArkAccordion.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAccordion.Item
      className={cn("flex flex-col border-b last:border-b-0", className)}
      data-slot="accordion-item"
      {...rest}
    />
  );
};

export const AccordionTrigger = (
  props: React.ComponentProps<typeof ArkAccordion.ItemTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemTrigger
      className={cn(
        "flex flex-1 items-center justify-between gap-3",
        "py-4",
        "text-left font-medium text-sm",
        "rounded-md border border-transparent",
        "outline-none",
        "transition-all",
        "disabled:pointer-events-none disabled:opacity-50 disabled:grayscale",
        "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "[&_[data-state=open]>svg]:rotate-180",
        className
      )}
      data-slot="accordion-trigger"
      {...rest}
    >
      {children}

      <ArkAccordion.ItemIndicator data-slot="accordion-indicator">
        <ChevronDownIcon
          className={cn(
            "translate-y-0.5",
            "size-4",
            "shrink-0",
            "text-muted-foreground",
            "pointer-events-none",
            "transition-transform duration-300"
          )}
        />
      </ArkAccordion.ItemIndicator>
    </ArkAccordion.ItemTrigger>
  );
};

export const AccordionContent = (
  props: React.ComponentProps<typeof ArkAccordion.ItemContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      className={cn(
        "overflow-hidden rounded-md text-sm",
        "data-[state=open]:animate-slide-down",
        "data-[state=closed]:animate-slide-up",
        className
      )}
      data-slot="accordion-content"
      {...rest}
    >
      <div className="pt-0 pb-4">{children}</div>
    </ArkAccordion.ItemContent>
  );
};
