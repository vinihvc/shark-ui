import {
  Accordion as ArkAccordion,
  useAccordionContext,
} from "@ark-ui/solid/accordion";
import { ChevronDownIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useAccordion = useAccordionContext;

export const Accordion = (props: ComponentProps<typeof ArkAccordion.Root>) => {
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
  props: ComponentProps<typeof ArkAccordion.Item>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkAccordion.Item
      class={cn("flex flex-col border-b last:border-b-0", className)}
      data-slot="accordion-item"
      {...rest}
    />
  );
};

export const AccordionTrigger = (
  props: ComponentProps<typeof ArkAccordion.ItemTrigger>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemTrigger
      class={cn(
        "flex flex-1 items-center justify-between gap-3",
        "py-4",
        "text-left font-medium text-sm",
        "rounded-md border border-transparent",
        "outline-none",
        "transition-all",
        "disabled:pointer-events-none disabled:opacity-64 disabled:grayscale",
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
          class={cn(
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
  props: ComponentProps<typeof ArkAccordion.ItemContent>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      class={cn(
        "overflow-hidden rounded-md text-sm",
        "data-[state=open]:animate-slide-down",
        "data-[state=closed]:animate-slide-up",
        className
      )}
      data-slot="accordion-content"
      {...rest}
    >
      <div class="pt-0 pb-4">{children}</div>
    </ArkAccordion.ItemContent>
  );
};
