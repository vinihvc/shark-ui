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
) => <ArkCollapsible.Trigger data-slot="collapsible-trigger" {...props} />;

export const CollapsibleContent = (
  props: React.ComponentProps<typeof ArkCollapsible.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Content
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-in data-[state=open]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down",
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
