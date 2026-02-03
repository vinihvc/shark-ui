"use client";

import { ark } from "@ark-ui/react";
import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const avatarVariants = tv({
  base: [
    "group/avatar",
    "relative",
    "size-8",
    "inline-flex shrink-0 items-center justify-center",
    "bg-background",
    "rounded-full",
    "font-medium text-xs",
    "select-none",
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
        "rounded-full",
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
        "rounded-full",
        "[&>svg]:size-4 group-data-[size=lg]/avatar:[&>svg]:size-4.5 group-data-[size=sm]/avatar:[&>svg]:size-3",
        className
      )}
      data-slot="avatar-fallback"
      {...rest}
    />
  );
};

export const avatarBadgeVariants = tv({
  base: [
    "z-10",
    "absolute right-0 bottom-0",
    "inline-flex items-center justify-center",
    "rounded-full",
    "ring-2 ring-background",
    "size-2.5 [&>svg]:size-2",
  ],
  variants: {
    variant: {
      success: ["bg-success text-success-foreground"],
      warning: "bg-warning text-warning-foreground",
      destructive: "bg-destructive text-destructive-foreground",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

interface AvatarBadgeProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof avatarBadgeVariants> {}

export const AvatarBadge = (props: AvatarBadgeProps) => {
  const { variant, className, ...rest } = props;

  return (
    <ark.span
      className={cn(avatarBadgeVariants({ variant }), className)}
      data-slot="avatar-badge"
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
        "*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
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
        "text-muted-foreground text-sm",
        "rounded-full",
        "ring-2 ring-background",
        "[&>svg]:size-4",
        className
      )}
      data-slot="avatar-group-count"
      {...rest}
    />
  );
};
