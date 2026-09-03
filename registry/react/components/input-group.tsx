"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
import { Textarea } from "@/registry/react/components/textarea";

const inpuGroupVariants = tv({
  base: [
    "group/input-group",
    "relative",
    "w-full min-w-0",
    "flex items-center",
    "bg-background dark:bg-input/30",
    "[--input-group-inset:calc(var(--spacing)*3-0.45rem)]",
    "border border-input shadow-xs/5",
    "transition-[color,box-shadow]",
    "has-[>textarea]:h-auto",
    "has-[>[data-align=inline-start]]:[&>input]:ps-2",
    "has-[>[data-align=inline-end]]:[&>input]:pe-2",
    "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
    "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
    "outline-none focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/32",
    "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[[data-slot][aria-invalid=true]]:ring-destructive/24",
    "dark:has-[[data-slot][aria-invalid=true]]:border-destructive-foreground dark:has-[[data-slot][aria-invalid=true]]:ring-destructive-foreground/40",
    "motion-reduce:transition-none!",
  ],
  defaultVariants: {
    pill: false,
    size: "md",
  },
  variants: {
    pill: {
      false: "rounded-lg",
      true: "rounded-full",
    },
    size: {
      lg: ["h-9"],
      md: ["h-8"],
      sm: ["h-7"],
    },
  },
});

export interface InputGroupProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof inpuGroupVariants> {}

export const InputGroup = (props: InputGroupProps) => {
  const { size = "md", pill = false, className, ...rest } = props;

  return (
    <ark.div
      className={cn(inpuGroupVariants({ pill, size }), className)}
      data-size={size}
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
    "[&>kbd]:rounded-[max(0px,calc(var(--radius)-var(--input-group-inset)))]",
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  defaultVariants: {
    align: "inline-start",
  },
  variants: {
    align: {
      "block-end": [
        "[--input-group-inset:--spacing(3)]",
        "order-last w-full justify-start px-[calc(--spacing(3)-1px)] pb-[calc(--spacing(3)-1px)]",
        "group-has-[>input]/input-group:pb-2.5",
        "[.border-t]:pt-[calc(--spacing(3)-1px)]",
        "in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)]",
      ],
      "block-start": [
        "[--input-group-inset:--spacing(3)]",
        "order-first w-full justify-start px-[calc(--spacing(3)-1px)] pt-[calc(--spacing(3)-1px)]",
        "group-has-[>input]/input-group:pt-2.5",
        "[.border-b]:pb-[calc(--spacing(3)-1px)]",
        "in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)]",
      ],
      "inline-end": [
        "order-last pe-[calc(--spacing(3)-1px)]",
        "has-[>button]:me-[-0.45rem]",
        "has-[>kbd]:me-[-0.35rem]",
        "in-data-[size=sm]:pe-[calc(--spacing(2.5)-1px)]",
      ],
      "inline-start": [
        "order-first ps-[calc(--spacing(3)-1px)]",
        "has-[>button]:ms-[-0.45rem]",
        "has-[>kbd]:ms-[-0.35rem]",
        "in-data-[size=sm]:ps-[calc(--spacing(2.5)-1px)]",
      ],
    },
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
  base: [
    "relative",
    "text-sm",
    "shadow-none",
    "[--input-group-inner-radius:max(0px,calc(var(--radius)-var(--input-group-inset)))]",
    "rounded-(--input-group-inner-radius)",
    "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
  ],
});

export const InputGroupButton = (props: ButtonProps) => {
  const {
    className,
    type = "button",
    variant = "ghost",
    size = "xs",
    ...rest
  } = props;

  return (
    <Button
      className={cn(inputGroupButtonVariants(), className)}
      data-slot="input-group-button"
      size={size}
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
        "flex items-center gap-2",
        "text-muted-foreground text-sm",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
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
        "flex-1",
        "bg-transparent",
        "rounded-none border-0 shadow-none",
        "focus-visible:ring-0",
        "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
        "dark:bg-transparent dark:disabled:bg-transparent",
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
        "flex-1",
        "py-3",
        "bg-transparent",
        "resize-none rounded-none border-0 shadow-none",
        "focus-visible:ring-0",
        "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
        "dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      data-slot="input-group-control"
      {...rest}
    />
  );
};
