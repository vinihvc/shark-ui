import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

const SKIP_NAV_ID = "skip-nav-content";

export interface SkipNavLinkProps extends ComponentProps<typeof ark.a> {
  /**
   * The id of the element to skip to.
   *
   * @default "skip-nav-content"
   */
  id?: string;
}

export const SkipNavLink = (props: SkipNavLinkProps) => {
  const {
    id = SKIP_NAV_ID,
    class: className,
    children = "Skip to content",
    ...rest
  } = props;

  return (
    <ark.a
      class={cn(
        "focus:fixed focus:inset-s-4 focus:top-4 focus:z-9999",
        "focus:px-4 focus:py-2",
        "focus:bg-primary",
        "focus:text-primary-foreground focus:text-sm",
        "sr-only focus:not-sr-only",
        "focus:rounded-lg",
        "focus:outline-none focus:ring-2 focus:ring-ring",
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

export interface SkipNavContentProps extends ComponentProps<typeof ark.div> {
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
      class={cn("outline-none", className)}
      data-slot="skip-nav-content"
      id={id}
      tabIndex={-1}
      {...rest}
    />
  );
};
