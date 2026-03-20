"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/registry/react/hooks/use-is-mobile";

export interface AnatomyCardProps extends React.ComponentProps<typeof ark.div> {
  /**
   * a11y title
   */
  title?: string;
}

export const AnatomyCard = (props: AnatomyCardProps) => {
  const { title, className, children, ...rest } = props;

  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <ark.figure
      aria-hidden
      aria-label={title}
      className={cn(
        "my-20 px-20",
        "max-sm:hidden",
        "flex items-center justify-center",
        "size-full",
        "rounded-xl",
        "no-scrollbar",
        "*:[div]:min-h-[350px] *:[div]:max-w-sm",
        className
      )}
      data-slot="anatomy-card"
      inert
      role="img"
      {...rest}
    >
      {children}
      <figcaption className="sr-only">{title}</figcaption>
    </ark.figure>
  );
};
