import {
  Collapsible as ArkCollapsible,
  useCollapsibleContext,
} from "@ark-ui/solid/collapsible";
import { ChevronDownIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useCollapsible = useCollapsibleContext;

export const Collapsible = (
  props: ComponentProps<typeof ArkCollapsible.Root>
) => {
  const {
    collapsedHeight,
    lazyMount = true,
    unmountOnExit = true,
    class: className,
    ...rest
  } = props;

  return (
    <ArkCollapsible.Root
      class={cn("group/collapsible", className)}
      collapsedHeight={collapsedHeight}
      data-partial-collapse={collapsedHeight ? "" : undefined}
      data-slot="collapsible"
      lazyMount={collapsedHeight ? false : lazyMount}
      unmountOnExit={collapsedHeight ? false : unmountOnExit}
      {...rest}
    />
  );
};

export const CollapsibleTrigger = (
  props: ComponentProps<typeof ArkCollapsible.Trigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCollapsible.Trigger
      class={cn(
        "cursor-pointer",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "has-data-[slot=collapsible-indicator]:[button]:justify-between",
        className
      )}
      data-slot="collapsible-trigger"
      {...rest}
    />
  );
};

export const CollapsibleContent = (
  props: ComponentProps<typeof ArkCollapsible.Content>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkCollapsible.Content
      class={cn(
        "h-(--collapsed-height)",
        "group-data-partial-collapse/collapsible:h-full",
        "transition-[height] duration-200",
        "overflow-hidden",
        "data-[state=open]:animate-expand",
        "data-[state=closed]:animate-collapse"
      )}
      data-slot="collapsible-content"
      {...rest}
    >
      <div class={className}>{children}</div>
    </ArkCollapsible.Content>
  );
};

export const CollapsibleIndicator = (
  props: ComponentProps<typeof ArkCollapsible.Indicator>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCollapsible.Indicator
      class={cn("data-[state=open]:[&_svg]:rotate-180", className)}
      data-slot="collapsible-indicator"
      {...rest}
    >
      <ChevronDownIcon aria-hidden class="transition-transform duration-200" />
    </ArkCollapsible.Indicator>
  );
};
