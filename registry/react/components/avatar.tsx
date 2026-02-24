"use client";

import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  Status,
  type statusVariants,
} from "@/registry/react/components/status";

const avatarVariants = tv({
  base: [
    "group/avatar",
    "relative",
    "size-8",
    "inline-flex shrink-0 items-center justify-center",
    "bg-background",
    "select-none font-medium text-xs",
    "rounded-full",
    "after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
  ],
  variants: {
    size: {
      sm: "size-6",
      md: "size-8",
      lg: "size-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface AvatarProps
  extends React.ComponentProps<typeof ArkAvatar.Root>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = (props: AvatarProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ArkAvatar.Root
      className={cn(avatarVariants({ size }), className)}
      data-size={size}
      data-slot="avatar"
      {...rest}
    />
  );
};

export const AvatarImage = (
  props: React.ComponentProps<typeof ArkAvatar.Image>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Image
      className={cn(
        "size-full",
        "aspect-square object-cover",
        "rounded-[inherit]",
        className
      )}
      data-slot="avatar-image"
      {...rest}
    />
  );
};

export const AvatarFallback = (
  props: React.ComponentProps<typeof ArkAvatar.Fallback>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Fallback
      className={cn(
        "size-full",
        "flex items-center justify-center",
        "bg-muted",
        "rounded-[inherit]",
        "[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-4.5 group-data-[size=sm]/avatar:[&_svg]:size-3",
        className
      )}
      data-slot="avatar-fallback"
      {...rest}
    />
  );
};

interface AvatarBadgeProps
  extends React.ComponentProps<typeof ark.span>,
    Pick<VariantProps<typeof statusVariants>, "variant"> {}

export const AvatarBadge = (props: AvatarBadgeProps) => {
  const { variant, className, ...rest } = props;

  return (
    <Status
      className={cn(
        "absolute inset-e-0 bottom-0 z-10",
        "flex items-center justify-center",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&_svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&_svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&_svg]:size-2",
        className
      )}
      data-slot="avatar-badge"
      variant={variant}
      {...rest}
    />
  );
};

export const AvatarGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex -space-x-2",
        "**:data-[slot=avatar]:ring-2 **:data-[slot=avatar]:ring-background",
        className
      )}
      data-slot="avatar-group"
      {...rest}
    />
  );
};

export const AvatarGroupCount = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "size-8",
        "flex shrink-0 items-center justify-center",
        "bg-muted",
        "select-none text-muted-foreground text-sm",
        "rounded-full",
        "ring-2 ring-background",
        "[&_svg]:size-4",
        className
      )}
      data-slot="avatar-group-count"
      {...rest}
    />
  );
};
