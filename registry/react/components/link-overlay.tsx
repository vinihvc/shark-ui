"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

export interface LinkBoxProps extends React.ComponentProps<typeof ark.div> {
  asChild?: boolean;
}

export const LinkBox = (props: LinkBoxProps) => {
  const { asChild, className, ...rest } = props;

  return (
    <ark.div
      asChild={asChild}
      className={cn("relative", className)}
      data-slot="link-box"
      {...rest}
    />
  );
};

export interface LinkOverlayProps extends React.ComponentProps<typeof ark.a> {
  asChild?: boolean;
}

export const LinkOverlay = (props: LinkOverlayProps) => {
  const { asChild, className, ...rest } = props;

  return (
    <ark.a
      asChild={asChild}
      className={cn(
        "absolute inset-0 z-0",
        "rounded-[inherit]",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
        className
      )}
      data-slot="link-overlay"
      {...rest}
    />
  );
};
