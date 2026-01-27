import { Clipboard as ArkClipboard } from "@ark-ui/react/clipboard";
import { Check, ClipboardIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { inputVariants } from "./input";

interface ClipboardProps
  extends React.ComponentProps<typeof ArkClipboard.Root> {
  /**
   * The children of the clipboard
   */
  rootClassName?: string;
}

export const Clipboard = (props: ClipboardProps) => {
  const { rootClassName, className, children, ...rest } = props;

  return (
    <ArkClipboard.Root
      className={cn(rootClassName)}
      data-slot="clipboard"
      {...rest}
    >
      <ArkClipboard.Control
        className={cn("flex items-center gap-2", className)}
        data-slot="clipboard-control"
      >
        {children}
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
};

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
  const { copied = <Check />, className, children, ...rest } = props;

  return (
    <ArkClipboard.Indicator
      asChild
      data-slot="clipboard-indicator"
      {...rest}
      className="pointer-events-none"
      copied={copied}
    >
      {children || <ClipboardIcon />}
    </ArkClipboard.Indicator>
  );
};
