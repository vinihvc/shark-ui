import { Clipboard as ArkClipboard } from "@ark-ui/react/clipboard";
import { Check, Copy } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { inputVariants } from "./input";

export const Clipboard = (
  props: React.ComponentProps<typeof ArkClipboard.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkClipboard.Root data-slot="clipboard-root" {...rest}>
      <ArkClipboard.Control
        className={cn("flex items-center gap-2", className)}
        data-slot="clipboard-control"
      >
        {children}
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
};

export const ClipboardContext = (
  props: React.ComponentProps<typeof ArkClipboard.Context>
) => <ArkClipboard.Context data-slot="clipboard-context" {...props} />;

export const ClipboardTrigger = (
  props: React.ComponentProps<typeof ArkClipboard.Trigger>
) => <ArkClipboard.Trigger data-slot="clipboard-trigger" {...props} />;

export const ClipboardInput = (
  props: React.ComponentProps<typeof ArkClipboard.Input>
) => {
  const { className, ...rest } = props;

  return (
    <ArkClipboard.Input
      data-slot="clipboard-input"
      {...rest}
      className={cn(inputVariants(), className)}
    />
  );
};

export const ClipboardIndicator = (
  props: React.ComponentProps<typeof ArkClipboard.Indicator>
) => {
  const { copied = <Check />, children, ...rest } = props;

  return (
    <ArkClipboard.Indicator
      data-slot="clipboard-indicator"
      {...rest}
      copied={copied}
    >
      {children || <Copy />}
    </ArkClipboard.Indicator>
  );
};
