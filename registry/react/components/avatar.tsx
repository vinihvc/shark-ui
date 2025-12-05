"use client";

import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import type React from "react";
import { cn } from "@/lib/utils";

export const Avatar = (props: React.ComponentProps<typeof ArkAvatar.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Root
      className={cn(
        "relative",
        "size-8",
        "flex shrink-0",
        "overflow-hidden",
        "rounded-full",
        className
      )}
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
      className={cn("size-full", "aspect-square object-cover", className)}
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
        className
      )}
      {...rest}
    />
  );
};
