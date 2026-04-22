"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const announcementVariants = tv({
  base: [
    "group/announcement",
    "relative",
    "inline-flex min-w-0 max-w-full items-center gap-2",
    "py-0.5 ps-3 pe-3",
    "bg-input/4",
    "rounded-2xl border border-input",
    "transition-colors",
    "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "[&_svg]:size-3.5 [&_svg]:shrink-0",
    "has-data-[slot=badge]:ps-0.5",
    "[button&,a&]:cursor-pointer",
    "[&>svg]:text-muted-foreground",
    "[a&]:hover:bg-input/12",
    "**:data-[slot=badge]:h-6.5 **:data-[slot=badge]:rounded-xl **:data-[slot=badge]:px-2 **:data-[slot=badge]:sm:text-xs",
    "[button&,a&]:pointer-coarse:after:absolute [button&,a&]:pointer-coarse:after:size-full [button&,a&]:pointer-coarse:after:min-h-11 [button&,a&]:pointer-coarse:after:min-w-11",
  ],
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

export const AnnouncementTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "inline-flex min-w-0 flex-1 items-center gap-1 truncate",
        "select-none font-medium text-sm",
        className
      )}
      data-slot="announcement-title"
      {...rest}
    />
  );
};
