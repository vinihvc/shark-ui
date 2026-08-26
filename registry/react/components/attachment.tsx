"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";

export const attachmentVariants = tv({
  base: [
    "group/attachment relative flex w-fit min-w-0 max-w-full shrink-0 flex-wrap",
    "rounded-xl border bg-card text-card-foreground",
    "transition-colors",
    "focus-within:ring-1 focus-within:ring-ring/50",
    "has-[>a,>button]:hover:bg-muted/50",
    "data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed",
  ],
  defaultVariants: {
    orientation: "horizontal",
    size: "default",
  },
  variants: {
    orientation: {
      horizontal: "min-w-40 items-center",
      vertical: "w-24 flex-col has-data-[slot=attachment-content]:w-30",
    },
    size: {
      default:
        "gap-2 text-sm has-data-[slot=attachment-media]:p-2 has-data-[slot=attachment-content]:px-2.5 has-data-[slot=attachment-content]:py-2",
      sm: "gap-2.5 text-xs has-data-[slot=attachment-media]:p-1.5 has-data-[slot=attachment-content]:px-2 has-data-[slot=attachment-content]:py-1.5",
      xs: "gap-1.5 rounded-lg text-xs has-data-[slot=attachment-media]:p-1 has-data-[slot=attachment-content]:px-1.5 has-data-[slot=attachment-content]:py-1",
    },
  },
});

interface AttachmentProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof attachmentVariants> {
  state?: "done" | "error" | "idle" | "processing" | "uploading";
}

export const Attachment = (props: AttachmentProps) => {
  const {
    className,
    state = "done",
    size = "default",
    orientation = "horizontal",
    ...rest
  } = props;

  return (
    <ark.div
      className={cn(attachmentVariants({ orientation, size }), className)}
      data-orientation={orientation}
      data-size={size}
      data-slot="attachment"
      data-state={state}
      {...rest}
    />
  );
};

export const attachmentMediaVariants = tv({
  base: [
    "relative flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted text-foreground",
    "group-data-[orientation=vertical]/attachment:w-full",
    "group-data-[size=sm]/attachment:w-8",
    "group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-md",
    "group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive",
    "group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6!",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
    "group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6",
    "group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5",
  ],
  defaultVariants: {
    variant: "icon",
  },
  variants: {
    variant: {
      icon: "",
      image: [
        "opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100",
        "*:[img]:aspect-square *:[img]:w-full *:[img]:object-cover",
      ],
    },
  },
});

interface AttachmentMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof attachmentMediaVariants> {}

export const AttachmentMedia = (props: AttachmentMediaProps) => {
  const { className, variant = "icon", ...rest } = props;

  return (
    <ark.div
      className={cn(attachmentMediaVariants({ variant }), className)}
      data-slot="attachment-media"
      data-variant={variant}
      {...rest}
    />
  );
};

export const AttachmentContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0 max-w-full flex-1 leading-tight group-data-[orientation=vertical]/attachment:px-1",
        className
      )}
      data-slot="attachment-content"
      {...rest}
    />
  );
};

export const AttachmentTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "block min-w-0 max-w-full truncate font-medium",
        "group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer",
        className
      )}
      data-slot="attachment-title"
      {...rest}
    />
  );
};

export const AttachmentDescription = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "mt-0.5 block min-w-0 max-w-full truncate text-muted-foreground text-xs",
        "group-data-[state=error]/attachment:text-destructive/80",
        className
      )}
      data-slot="attachment-description"
      {...rest}
    />
  );
};

export const AttachmentActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative z-20 flex shrink-0 items-center",
        "group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:end-3 group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:gap-1",
        className
      )}
      data-slot="attachment-actions"
      {...rest}
    />
  );
};

export const AttachmentAction = (props: ButtonProps) => {
  const { className, variant, size = "icon-xs", ...rest } = props;

  return (
    <Button
      className={cn(className)}
      data-slot="attachment-action"
      size={size}
      variant={variant ?? "ghost"}
      {...rest}
    />
  );
};

export const AttachmentTrigger = (
  props: React.ComponentProps<typeof ark.button>
) => {
  const { className, type, ...rest } = props;

  return (
    <ark.button
      className={cn("absolute inset-0 z-10 outline-none", className)}
      data-slot="attachment-trigger"
      type={type ?? "button"}
      {...rest}
    />
  );
};

export const AttachmentGroup = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "scrollbar-none flex min-w-0 snap-x snap-mandatory scroll-px-1 gap-3 overflow-x-auto overscroll-x-contain py-1",
        "*:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",
        className
      )}
      data-slot="attachment-group"
      {...rest}
    />
  );
};
