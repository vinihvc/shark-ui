import { ark } from "@ark-ui/react/factory";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Breadcrumb = (props: React.ComponentProps<typeof ark.nav>) => {
  return <ark.nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
};

export const BreadcrumbList = (props: React.ComponentProps<typeof ark.ol>) => {
  const { className, ...rest } = props;

  return (
    <ark.ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-muted-foreground text-sm sm:gap-2.5",
        "wrap-break-word",
        className
      )}
      data-slot="breadcrumb-list"
      {...rest}
    />
  );
};

export const BreadcrumbItem = (props: React.ComponentProps<typeof ark.li>) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      className={cn("inline-flex items-center gap-1.5", className)}
      data-slot="breadcrumb-item"
      {...rest}
    />
  );
};

export const BreadcrumbLink = (props: React.ComponentProps<typeof ark.a>) => {
  const { className, ...rest } = props;

  return (
    <ark.a
      className={cn("transition-colors hover:text-foreground", className)}
      data-slot="breadcrumb-link"
      {...rest}
    />
  );
};

export const BreadcrumbPage = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      data-slot="breadcrumb-page"
      {...rest}
    />
  );
};

export const BreadcrumbSeparator = (
  props: React.ComponentProps<typeof ark.li>
) => {
  const { children, className, ...rest } = props;

  return (
    <ark.li
      aria-hidden="true"
      className={cn("opacity-80 [&>svg]:size-4", className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...rest}
    >
      {children ?? <ChevronRight />}
    </ark.li>
  );
};

export const BreadcrumbEllipsis = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      aria-hidden="true"
      className={className}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...rest}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </ark.span>
  );
};
