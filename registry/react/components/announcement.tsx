"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./badge";

export const announcementVariants = tv({
  base: [
    "group/announcement",
    "inline-flex items-center gap-2",
    "py-0.5 ps-3 pe-3",
    "has-data-[slot=announcement-badge]:ps-0.5",
    "bg-input/4 dark:bg-input/12",
    "rounded-full border border-input",
    "transition-colors",
    "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "[&_svg]:size-3.5 [&_svg]:shrink-0",
    "[button&,a&]:cursor-pointer",
    "[&>svg]:text-muted-foreground",
    "[&_[data-slot=announcement-title]_svg]:text-muted-foreground",
    "[a&]:hover:bg-input/8 dark:[a&]:hover:bg-input/24",
    "[button&,a&]:pointer-coarse:after:absolute [button&,a&]:pointer-coarse:after:size-full [button&,a&]:pointer-coarse:after:min-h-11 [button&,a&]:pointer-coarse:after:min-w-11",
  ],
  defaultVariants: {
    variant: "default",
  },
});

interface AnnouncementProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof announcementVariants> {
  /**
   * The ARIA role of the announcement.
   *
   * @default "status"
   */
  role?: "status" | "alert";
}

export const Announcement = (props: AnnouncementProps) => {
  const { className, role = "status", ...rest } = props;

  return (
    <ark.div
      className={cn(announcementVariants(), className)}
      data-slot="announcement"
      role={role}
      {...rest}
    />
  );
};

interface AnnouncementBadgeProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof badgeVariants> {}

export const AnnouncementBadge = (props: AnnouncementBadgeProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        badgeVariants({ variant, size: "lg", pill: true }),
        "px-2 opacity-90 sm:text-xs",
        className
      )}
      data-slot="announcement-badge"
      {...rest}
    />
  );
};

export const AnnouncementTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "inline-flex items-center gap-1",
        "select-none font-medium text-sm",
        className
      )}
      data-slot="announcement-title"
      {...rest}
    />
  );
};
