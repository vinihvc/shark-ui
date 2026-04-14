import { ark } from "@ark-ui/solid/factory";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

interface BreadcrumbProps extends ComponentProps<typeof ark.nav> {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @default "Breadcrumb"
   */
  "aria-label"?: string;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { "aria-label": ariaLabel = "Breadcrumb", ...rest } = props;

  return <ark.nav aria-label={ariaLabel} data-slot="breadcrumb" {...rest} />;
};

export const BreadcrumbList = (props: ComponentProps<typeof ark.ol>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.ol
      class={cn(
        "flex flex-wrap items-center gap-1.5 sm:gap-2.5",
        "wrap-break-word text-muted-foreground text-sm",
        className
      )}
      data-slot="breadcrumb-list"
      role="list"
      {...rest}
    />
  );
};

export const BreadcrumbItem = (props: ComponentProps<typeof ark.li>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.li
      class={cn("inline-flex items-center gap-1.5", className)}
      data-slot="breadcrumb-item"
      {...rest}
    />
  );
};

export const BreadcrumbLink = (props: ComponentProps<typeof ark.a>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.a
      class={cn(
        "text-nowrap",
        "rounded-md border border-transparent",
        "transition-colors",
        "hover:text-foreground",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      data-slot="breadcrumb-link"
      {...rest}
    />
  );
};

export const BreadcrumbPage = (props: ComponentProps<typeof ark.span>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.span
      aria-current="page"
      class={cn("font-normal text-foreground", className)}
      data-slot="breadcrumb-page"
      {...rest}
    />
  );
};

export const BreadcrumbSeparator = (props: ComponentProps<typeof ark.li>) => {
  const { children, className, ...rest } = props;

  return (
    <ark.li
      aria-hidden="true"
      class={cn("opacity-64 [&_svg]:size-4", className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...rest}
    >
      {children ?? <ChevronRightIcon />}
    </ark.li>
  );
};

export const BreadcrumbEllipsis = (props: ComponentProps<typeof ark.span>) => {
  return (
    <ark.span
      aria-hidden="true"
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...props}
    >
      <MoreHorizontalIcon class="size-4" />
    </ark.span>
  );
};
