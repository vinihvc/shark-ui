"use client";

import { ark } from "@ark-ui/react/factory";
import { XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import { FileThumbnail } from "@/registry/react/components/file-thumbnail";
import { IconTile } from "@/registry/react/components/icon-tile";
import { ScrollArea } from "./scroll-area";

export const attachmentVariants = tv({
  base: [
    "group/attachment",
    "relative",
    "w-fit min-w-0 max-w-full",
    "flex shrink-0 flex-nowrap",
    "px-2.5 has-[>[data-variant=image]]:px-0",
    "bg-card text-card-foreground",
    "rounded-xl border border-input",
    "transition-colors",
    "has-[>a,>button]:hover:bg-muted/50",
    "data-[state=idle]:border-dashed",
    "data-[state=error]:border-destructive/64 dark:data-[state=error]:border-destructive-foreground/64",
  ],
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
  variants: {
    orientation: {
      horizontal: "min-w-40 items-center",
      vertical: "w-24 flex-col has-data-[slot=attachment-content]:w-30",
    },
    size: {
      lg: "gap-3 text-base has-data-[slot=attachment-content]:py-2.5",
      md: "gap-2 text-sm has-data-[slot=attachment-content]:py-2",
      sm: "gap-2.5 text-xs has-data-[slot=attachment-content]:py-1.5",
      xs: "gap-1.5 rounded-lg text-xs has-data-[slot=attachment-content]:py-1",
    },
  },
});

interface AttachmentProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof attachmentVariants> {
  /**
   * Set the state of the attachment
   */
  state?: "done" | "error" | "idle" | "processing" | "uploading";
}

export const Attachment = (props: AttachmentProps) => {
  const {
    state = "done",
    size = "md",
    orientation = "horizontal",
    className,
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
    "relative",
    "aspect-square w-10",
    "flex shrink-0 items-center justify-center",
    "bg-muted",
    "text-foreground",
    "overflow-hidden",
    "group-data-[orientation=vertical]/attachment:w-full",
    "group-data-[size=lg]/attachment:w-12 group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7",
    "group-data-[orientation=vertical]/attachment:**:data-[slot=spinner]:size-6!",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
    "group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6",
    "group-data-[size=lg]/attachment:[&_svg:not([class*='size-'])]:size-5",
    "group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5",
  ],
  defaultVariants: {
    variant: "icon",
  },
  variants: {
    variant: {
      file: [
        "w-8 overflow-visible bg-transparent",
        "group-data-[size=lg]/attachment:w-10",
        "group-data-[size=sm]/attachment:w-6.5",
        "group-data-[size=xs]/attachment:w-6",
      ],
      icon: "",
      image: [
        "rounded-[inherit]",
        "[&>img]:aspect-square [&>img]:size-full [&>img]:object-cover",
      ],
    },
  },
});

interface AttachmentMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof attachmentMediaVariants> {
  /**
   * The format of the attachment
   */
  format?: string;
}

export const AttachmentMedia = (props: AttachmentMediaProps) => {
  const { children, className, format, variant = "icon", ...rest } = props;

  return (
    <ark.div
      className={cn(attachmentMediaVariants({ variant }), className)}
      data-slot="attachment-media"
      data-variant={variant}
      {...rest}
    >
      {variant === "file" ? (
        <FileThumbnail
          className="group-data-[size=lg]/attachment:scale-[1.2] group-data-[size=sm]/attachment:scale-[.8] group-data-[size=xs]/attachment:scale-[.7]"
          format={format}
          size="sm"
        />
      ) : variant === "icon" ? (
        <IconTile aria-hidden="true" className="size-full">
          {children}
        </IconTile>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const AttachmentContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0 max-w-full",
        "flex-1",
        "leading-tight",
        "group-data-[orientation=vertical]/attachment:px-1",
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
        "block",
        "min-w-0 max-w-full",
        "mt-0.5",
        "truncate text-muted-foreground text-xs",
        "group-data-[state=error]/attachment:text-destructive",
        "dark:group-data-[state=error]/attachment:text-destructive-foreground",
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
        "relative z-20",
        "flex shrink-0 items-center self-start",
        "gap-1",
        "group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:inset-e-1.5 group-data-[orientation=vertical]/attachment:top-1.5",
        "group-data-[orientation=vertical]/attachment:*:data-[slot=attachment-action]:size-5",
        className
      )}
      data-slot="attachment-actions"
      {...rest}
    />
  );
};

export const AttachmentAction = (props: ButtonProps) => {
  const { variant = "ghost", size = "icon-xs", pill = true, ...rest } = props;

  return (
    <Button
      data-slot="attachment-action"
      pill={pill}
      size={size}
      variant={variant}
      {...rest}
    />
  );
};

export const AttachmentRemove = (props: ButtonProps) => (
  <AttachmentAction data-slot="attachment-remove" {...props}>
    <XIcon aria-hidden="true" />
  </AttachmentAction>
);

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
  const { children, className, ...rest } = props;

  return (
    <ScrollArea
      className={cn("h-auto py-1", className)}
      orientation="horizontal"
    >
      <ark.div
        className={cn(
          "flex h-14 w-max min-w-full gap-3",
          "*:data-[slot=attachment]:h-full! *:data-[slot=attachment]:flex-none",
          "[&>[data-slot=attachment]:not(:has([data-slot=attachment-content]))]:w-14"
        )}
        data-slot="attachment-group"
        {...rest}
      >
        {children}
      </ark.div>
    </ScrollArea>
  );
};
