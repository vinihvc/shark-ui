import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Accordion = (
  props: React.ComponentProps<typeof ArkAccordion.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkAccordion.Root
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
        "flex flex-1 items-start justify-between gap-4",
        "py-4",
        "text-left font-medium text-sm",
        "rounded-md",
        "outline-none",
        "transition-all",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "[&_[data-state=open]>svg]:rotate-180",
        className
      )}
      data-slot="accordion-trigger"
      {...rest}
    >
      {children}

      <AccordionIndicator>
        <ChevronDown className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
      </AccordionIndicator>
    </ArkAccordion.ItemTrigger>
  );
};

export const AccordionIndicator = (
  props: React.ComponentProps<typeof ArkAccordion.ItemIndicator>
) => <ArkAccordion.ItemIndicator data-slot="accordion-indicator" {...props} />;

export const AccordionContent = (
  props: React.ComponentProps<typeof ArkAccordion.ItemContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      className={cn(
        "text-sm",
        "overflow-hidden",
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
