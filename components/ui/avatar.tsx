import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const avatarVariants = tv({
  slots: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
    image: "aspect-square h-full w-full",
    fallback: [
      "flex h-full w-full items-center justify-center rounded-full",
      "bg-muted text-muted-foreground",
      "font-medium text-sm",
    ],
  },
});

const { root, image, fallback } = avatarVariants();

export interface AvatarProps
  extends React.ComponentProps<typeof ArkAvatar.Root>,
    VariantProps<typeof avatarVariants> {}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof ArkAvatar.Root>,
  AvatarProps
>(({ className, ...props }, ref) => (
  <ArkAvatar.Root className={cn(root(), className)} ref={ref} {...props} />
));
AvatarRoot.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof ArkAvatar.Image>,
  React.ComponentProps<typeof ArkAvatar.Image>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Image className={cn(image(), className)} ref={ref} {...props} />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof ArkAvatar.Fallback>,
  React.ComponentProps<typeof ArkAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <ArkAvatar.Fallback
    className={cn(fallback(), className)}
    ref={ref}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
};
