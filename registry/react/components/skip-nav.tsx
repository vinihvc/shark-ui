import { ark } from "@ark-ui/react";
import type React from "react";
import { cn } from "@/lib/utils";

const SKIP_NAV_ID = "skip-nav-content";

export interface SkipNavLinkProps extends React.ComponentProps<typeof ark.a> {
  /**
   * The id of the element to skip to.
   * Must match the id on SkipNavContent.
   *
   * @default "skip-nav-content"
   */
  id?: string;
}

export const SkipNavLink = (props: SkipNavLinkProps) => {
  const {
    id = SKIP_NAV_ID,
    className,
    children = "Skip to content",
    ...rest
  } = props;

  return (
    <ark.a
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring",
        className
      )}
      data-slot="skip-nav-link"
      href={`#${id}`}
      {...rest}
    >
      {children}
    </ark.a>
  );
};

export interface SkipNavContentProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The id that SkipNavLink links to.
   *
   * @default "skip-nav-content"
   */
  id?: string;
}

export const SkipNavContent = (props: SkipNavContentProps) => {
  const { id = SKIP_NAV_ID, className, ...rest } = props;

  return (
    <ark.div
      className={cn("outline-none", className)}
      data-slot="skip-nav-content"
      id={id}
      tabIndex={-1}
      {...rest}
    />
  );
};
