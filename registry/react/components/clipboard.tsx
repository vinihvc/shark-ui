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
    <ArkClipboard.Root {...rest}>
      <ArkClipboard.Control
        className={cn("flex items-center gap-2", className)}
      >
        {children}
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
};

export const ClipboardContext = (
  props: React.ComponentProps<typeof ArkClipboard.Context>
) => <ArkClipboard.Context {...props} />;

export const ClipboardTrigger = (
  props: React.ComponentProps<typeof ArkClipboard.Trigger>
) => <ArkClipboard.Trigger {...props} />;

interface ClipboardInputProps
  extends React.ComponentProps<typeof ArkClipboard.Input> {}

export const ClipboardInput = (props: ClipboardInputProps) => {
  const { className, ...rest } = props;

  return (
    <ArkClipboard.Input {...rest} className={cn(inputVariants(), className)} />
  );
};

export const ClipboardIndicator = (
  props: React.ComponentProps<typeof ArkClipboard.Indicator>
) => {
  const { copied = <Check />, children, ...rest } = props;

  return (
    <ArkClipboard.Indicator {...rest} asChild copied={copied}>
      {children || <Copy />}
    </ArkClipboard.Indicator>
  );
};
