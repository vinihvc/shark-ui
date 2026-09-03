"use client";

import { ark } from "@ark-ui/react/factory";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const MessageBubbleGroup = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex min-w-0 flex-col gap-2", className)}
      data-slot="message-bubble-group"
      {...rest}
    />
  );
};

export const messageBubbleVariants = tv({
  base: [
    "group/message-bubble relative flex w-fit min-w-0 max-w-[80%] flex-col gap-1",
    "data-[align=end]:self-end group-data-[align=end]/message:self-end",
    "data-[variant=ghost]:max-w-full",
    "has-[[data-slot=message-bubble-reactions][data-side=bottom]]:mb-5",
    "has-[[data-slot=message-bubble-reactions][data-side=top]]:mt-5",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "[--message-bubble-surface:var(--primary)]",
        "*:data-[slot=message-bubble-content]:bg-primary *:data-[slot=message-bubble-content]:text-primary-foreground",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-primary/80",
      ],
      destructive: [
        "[--message-bubble-surface:color-mix(in_oklab,var(--destructive)_10%,var(--background))]",
        "dark:[--message-bubble-surface:color-mix(in_oklab,var(--destructive)_5%,var(--background))]",
        "*:data-[slot=message-bubble-content]:bg-destructive/10 *:data-[slot=message-bubble-content]:text-destructive-foreground",
        "dark:*:data-[slot=message-bubble-content]:bg-destructive/5",
        "*:data-[slot=message-bubble-content]:border-destructive-foreground/20",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-destructive/20",
      ],
      ghost: [
        "[--message-bubble-surface:var(--background)]",
        "border-none *:data-[slot=message-bubble-content]:rounded-none *:data-[slot=message-bubble-content]:bg-transparent *:data-[slot=message-bubble-content]:p-0",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-muted",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:text-foreground",
        "dark:[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-muted/50",
      ],
      outline: [
        "[--message-bubble-surface:var(--background)]",
        "*:data-[slot=message-bubble-content]:border-border *:data-[slot=message-bubble-content]:bg-background",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-muted",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:text-foreground",
        "dark:[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-input/30",
      ],
      secondary: [
        "[--message-bubble-surface:var(--secondary)]",
        "*:data-[slot=message-bubble-content]:bg-secondary *:data-[slot=message-bubble-content]:text-secondary-foreground",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
      ],
      tinted: [
        "[--message-bubble-surface:oklch(from_var(--primary)_0.93_calc(c*0.4)_h)]",
        "dark:[--message-bubble-surface:oklch(from_var(--primary)_0.3_calc(c*0.4)_h)]",
        "*:data-[slot=message-bubble-content]:bg-[oklch(from_var(--primary)_0.93_calc(c*0.4)_h)] *:data-[slot=message-bubble-content]:text-foreground",
        "dark:*:data-[slot=message-bubble-content]:bg-[oklch(from_var(--primary)_0.3_calc(c*0.4)_h)]",
        "[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.88_calc(c*0.5)_h)]",
        "dark:[&>[data-slot=message-bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.35_calc(c*0.5)_h)]",
      ],
    },
  },
});

interface MessageBubbleProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof messageBubbleVariants> {
  align?: "end" | "start";
}

export const MessageBubble = (props: MessageBubbleProps) => {
  const { variant = "default", align = "start", className, ...rest } = props;

  return (
    <ark.div
      className={cn(messageBubbleVariants({ variant }), className)}
      data-align={align}
      data-slot="message-bubble"
      data-variant={variant}
      {...rest}
    />
  );
};

export const MessageBubbleContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "wrap-break-word w-fit min-w-0 max-w-full overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm leading-relaxed",
        "group-data-[align=end]/message-bubble:self-end",
        "[button,a]:outline-none [button,a]:transition-colors [button]:text-left",
        "[button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/50",
        className
      )}
      {...rest}
      data-slot="message-bubble-content"
    />
  );
};

export const MessageBubbleTrigger = (
  props: React.ComponentProps<typeof ark.button>
) => {
  const { className, children, ...rest } = props;

  return (
    <ark.button
      aria-label="Message actions"
      className={cn(
        "group/message-bubble-trigger",
        "absolute inset-e-0 top-0 z-10",
        "pointer-fine:flex hidden h-8 w-16 shrink-0 items-center justify-end overflow-hidden pe-2",
        "rounded-se-xl",
        "group-data-[variant=ghost]/message-bubble:rounded-none",
        "ltr:bg-linear-to-tr rtl:bg-linear-to-tl",
        "from-transparent to-(--message-bubble-surface)",
        "pointer-fine:opacity-0",
        "pointer-fine:group-hover/message-bubble:opacity-100",
        "focus-visible:opacity-100",
        "data-[state=open]:opacity-100",
        "group-data-[variant=default]/message-bubble:text-primary-foreground",
        "group-data-[variant=destructive]/message-bubble:text-destructive-foreground",
        "group-data-[variant=ghost]/message-bubble:text-foreground",
        "group-data-[variant=outline]/message-bubble:text-foreground",
        "group-data-[variant=secondary]/message-bubble:text-secondary-foreground",
        "group-data-[variant=tinted]/message-bubble:text-foreground",
        "outline-none",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "[&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
        "transition-opacity duration-200 ease-out",
        "motion-reduce:transition-none!",
        className
      )}
      {...rest}
      data-slot="message-bubble-trigger"
      type="button"
    >
      <span
        className={cn(
          "inline-flex items-center justify-center",
          "pointer-fine:ltr:translate-x-2",
          "pointer-fine:rtl:-translate-x-2",
          "pointer-fine:group-hover/message-bubble:translate-x-0",
          "group-focus-visible/message-bubble-trigger:translate-x-0",
          "group-data-[state=open]/message-bubble-trigger:translate-x-0",
          "transition-transform duration-200 ease-out",
          "motion-reduce:transition-none!"
        )}
      >
        {children ?? <ChevronDownIcon aria-hidden="true" className="size-5" />}
      </span>
    </ark.button>
  );
};

export const messageBubbleReactionsVariants = tv({
  base: [
    "absolute z-10",
    "w-fit",
    "px-1.5 py-0.5",
    "flex shrink-0 items-center justify-center gap-1",
    "overflow-hidden",
    "bg-muted",
    "text-sm leading-none",
    "rounded-full border border-input",
    "has-[button]:p-0",
  ],
  defaultVariants: {
    align: "end",
    side: "bottom",
  },
  variants: {
    align: {
      end: "inset-e-3",
      start: "inset-s-3",
    },
    side: {
      bottom: "bottom-0 translate-y-3/4",
      top: "top-0 -translate-y-3/4",
    },
  },
});

interface MessageBubbleReactionsProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof messageBubbleReactionsVariants> {}

export const MessageBubbleReactions = (props: MessageBubbleReactionsProps) => {
  const { side = "bottom", align = "end", className, ...rest } = props;

  return (
    <ark.div
      className={cn(messageBubbleReactionsVariants({ align, side }), className)}
      data-align={align}
      data-side={side}
      data-slot="message-bubble-reactions"
      {...rest}
    />
  );
};
