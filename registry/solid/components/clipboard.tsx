import {
  Clipboard as ArkClipboard,
  useClipboardContext,
} from "@ark-ui/solid/clipboard";
import { CheckIcon, ClipboardIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { inputVariants } from "@/registry/solid/components/input";

export const useClipboard = useClipboardContext;

interface ClipboardProps extends ComponentProps<typeof ArkClipboard.Root> {
  /**
   * The children of the clipboard
   */
  rootClassName?: string;
}

export const Clipboard = (props: ClipboardProps) => {
  const { rootClassName, asChild, className, children, ...rest } = props;

  return (
    <ArkClipboard.Root
      class={cn(rootClassName)}
      data-slot="clipboard"
      {...rest}
    >
      <ArkClipboard.Control
        class={cn("flex items-center gap-2", className)}
        data-slot="clipboard-control"
      >
        {children}
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
};

export const ClipboardTrigger = (
  props: ComponentProps<typeof ArkClipboard.Trigger>
) => <ArkClipboard.Trigger data-slot="clipboard-trigger" {...props} />;

export const ClipboardInput = (
  props: ComponentProps<typeof ArkClipboard.Input>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkClipboard.Input
      class={cn(inputVariants(), className)}
      data-slot="clipboard-input"
      {...rest}
    />
  );
};

const clipboardValueVariants = tv({
  base: [
    "inline-flex items-center",
    "px-3",
    "bg-transparent dark:bg-input/30",
    "text-base md:text-sm",
    "rounded-lg border border-input shadow-sm/5",
  ],
  variants: {
    size: {
      xs: "h-6",
      sm: "h-7",
      md: "h-8",
      lg: "h-9",
      xl: "h-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ClipboardValueProps
  extends ComponentProps<typeof ArkClipboard.ValueText>,
    VariantProps<typeof clipboardValueVariants> {}

export const ClipboardValue = (props: ClipboardValueProps) => {
  const { size, className, ...rest } = props;

  return (
    <ArkClipboard.ValueText
      data-slot="clipboard-value"
      {...rest}
      class={cn(clipboardValueVariants({ size }), className)}
    />
  );
};

export const ClipboardIndicator = (
  props: ComponentProps<typeof ArkClipboard.Indicator>
) => {
  const { copied = <CheckIcon />, className, children, ...rest } = props;

  return (
    <ArkClipboard.Indicator
      data-slot="clipboard-indicator"
      {...rest}
      class="pointer-events-none"
      copied={copied}
    >
      {children || <ClipboardIcon />}
    </ArkClipboard.Indicator>
  );
};
