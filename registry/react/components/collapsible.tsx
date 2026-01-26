import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Collapsible = (
  props: React.ComponentProps<typeof ArkCollapsible.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkCollapsible.Root
      data-slot="collapsible"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const CollapsibleTrigger = (
  props: React.ComponentProps<typeof ArkCollapsible.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Trigger
      className={cn("cursor-pointer", className)}
      data-slot="collapsible-trigger"
      {...rest}
    />
  );
};

export const CollapsibleContent = (
  props: React.ComponentProps<typeof ArkCollapsible.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Content
      className={cn(
        "h-(--collapsed-height)",
        "transition-[height] duration-200",
        "overflow-hidden",
        "data-[state=open]:animate-expand",
        "data-[state=closed]:animate-collapse",
        className
      )}
      data-slot="collapsible-content"
      {...rest}
    />
  );
};

export const CollapsibleIndicator = (
  props: React.ComponentProps<typeof ArkCollapsible.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Indicator
      className={cn("data-[state=open]:[&_svg]:rotate-180", className)}
      data-slot="collapsible-indicator"
      {...rest}
    >
      <ChevronDown className="transition-transform duration-200" />
    </ArkCollapsible.Indicator>
  );
};
