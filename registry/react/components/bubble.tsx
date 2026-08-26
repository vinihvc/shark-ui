"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const BubbleGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex min-w-0 flex-col gap-2", className)}
      data-slot="bubble-group"
      {...rest}
    />
  );
};

export const bubbleVariants = tv({
  base: [
    "group/bubble relative flex w-fit min-w-0 max-w-[80%] flex-col gap-1",
    "data-[align=end]:self-end group-data-[align=end]/message:self-end",
    "data-[variant=ghost]:max-w-full",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "*:data-[slot=bubble-content]:bg-primary *:data-[slot=bubble-content]:text-primary-foreground",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/80",
      ],
      destructive: [
        "*:data-[slot=bubble-content]:bg-destructive/10 *:data-[slot=bubble-content]:text-destructive",
        "dark:*:data-[slot=bubble-content]:bg-destructive/20",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/20",
        "dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/30",
      ],
      ghost: [
        "border-none *:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground",
        "dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted/50",
      ],
      muted: [
        "*:data-[slot=bubble-content]:bg-muted",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)]",
      ],
      outline: [
        "*:data-[slot=bubble-content]:border-border *:data-[slot=bubble-content]:bg-background",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground",
        "dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/30",
      ],
      secondary: [
        "*:data-[slot=bubble-content]:bg-secondary *:data-[slot=bubble-content]:text-secondary-foreground",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
      ],
      tinted: [
        "*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.93_calc(c*0.4)_h)] *:data-[slot=bubble-content]:text-foreground",
        "dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.3_calc(c*0.4)_h)]",
        "[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.88_calc(c*0.5)_h)]",
        "dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.35_calc(c*0.5)_h)]",
      ],
    },
  },
});

interface BubbleProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof bubbleVariants> {
  align?: "end" | "start";
}

export const Bubble = (props: BubbleProps) => {
  const { variant = "default", align = "start", className, ...rest } = props;

  return (
    <ark.div
      className={cn(bubbleVariants({ variant }), className)}
      data-align={align}
      data-slot="bubble"
      data-variant={variant}
      {...rest}
    />
  );
};

export const BubbleContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "wrap-break-word w-fit min-w-0 max-w-full overflow-hidden rounded-xl border border-transparent px-3 py-2 text-sm leading-relaxed",
        "group-data-[align=end]/bubble:self-end",
        "[button,a]:outline-none [button,a]:transition-colors [button]:text-left",
        "[button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/50",
        className
      )}
      data-slot="bubble-content"
      {...rest}
    />
  );
};

export const bubbleReactionsVariants = tv({
  base: [
    "absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1",
    "rounded-full bg-muted px-1.5 py-0.5 text-sm ring-3 ring-card",
    "has-[button]:p-0",
  ],
  defaultVariants: {
    align: "end",
    side: "bottom",
  },
  variants: {
    align: {
      end: "end-3",
      start: "start-3",
    },
    side: {
      bottom: "bottom-0 translate-y-3/4",
      top: "top-0 -translate-y-3/4",
    },
  },
});

interface BubbleReactionsProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof bubbleReactionsVariants> {}

export const BubbleReactions = (props: BubbleReactionsProps) => {
  const { side = "bottom", align = "end", className, ...rest } = props;

  return (
    <ark.div
      className={cn(bubbleReactionsVariants({ align, side }), className)}
      data-align={align}
      data-side={side}
      data-slot="bubble-reactions"
      {...rest}
    />
  );
};
