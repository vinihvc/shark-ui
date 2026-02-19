"use client";

import { ark } from "@ark-ui/react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
import { Textarea } from "@/registry/react/components/textarea";

export const InputGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        "has-[>[data-align=inline-start]]:[&>input]:ps-2",
        "has-[>[data-align=inline-end]]:[&>input]:pe-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      )}
      data-slot="input-group"
      role="group"
      {...rest}
    />
  );
};

const inputGroupAddonVariants = tv({
  base: [
    "h-auto",
    "flex items-center justify-center gap-2",
    "py-1.5",
    "select-none font-medium text-muted-foreground text-sm",
    "cursor-text",
    "group-data-[disabled=true]/input-group:opacity-64",
    "[&>kbd]:rounded-[calc(var(--radius)-5px)]",
    "[&>svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    align: {
      "inline-start": [
        "order-first ps-3",
        "has-[>button]:ms-[-0.45rem]",
        "has-[>kbd]:ms-[-0.35rem]",
      ],
      "inline-end": [
        "order-last pe-3",
        "has-[>button]:me-[-0.45rem]",
        "has-[>kbd]:me-[-0.35rem]",
      ],
      "block-start": [
        "order-first w-full justify-start px-3 pt-3",
        "group-has-[>input]/input-group:pt-2.5",
        "[.border-b]:pb-3",
      ],
      "block-end": [
        "order-last w-full justify-start px-3 pb-3",
        "group-has-[>input]/input-group:pb-2.5",
        "[.border-t]:pt-3",
      ],
    },
  },
  defaultVariants: {
    align: "inline-start",
  },
});

interface InputGroupAddonProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof inputGroupAddonVariants> {}

export const InputGroupAddon = (props: InputGroupAddonProps) => {
  const { className, align = "inline-start", ...rest } = props;

  return (
    <ark.div
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-slot="input-group-addon"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      role="group"
      {...rest}
    />
  );
};

const inputGroupButtonVariants = tv({
  base: "flex items-center gap-2 text-sm shadow-none",
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size">,
    VariantProps<typeof inputGroupButtonVariants> {}

export const InputGroupButton = (props: InputGroupButtonProps) => {
  const {
    className,
    type = "button",
    variant = "ghost",
    size = "xs",
    ...rest
  } = props;

  return (
    <Button
      className={cn(inputGroupButtonVariants({ size }), className)}
      data-size={size}
      data-slot="input-group-button"
      type={type}
      variant={variant}
      {...rest}
    />
  );
};

export const InputGroupText = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className
      )}
      data-slot="input-group-text"
      {...rest}
    />
  );
};

export const InputGroupInput = (props: React.ComponentProps<typeof Input>) => {
  const { className, ...rest } = props;

  return (
    <Input
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      data-slot="input-group-control"
      {...rest}
    />
  );
};

export const InputGroupTextarea = (
  props: React.ComponentProps<typeof Textarea>
) => {
  const { className, ...rest } = props;

  return (
    <Textarea
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      data-slot="input-group-control"
      {...rest}
    />
  );
};
