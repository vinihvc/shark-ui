"use client";

import {
  Pagination as ArkPagination,
  usePaginationContext,
} from "@ark-ui/react/pagination";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
} from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";

export const usePagination = usePaginationContext;

interface PaginationProps
  extends React.ComponentProps<typeof ArkPagination.Root> {}

export const Pagination = (props: PaginationProps) => {
  const { className, ...rest } = props;

  return (
    <ArkPagination.Root
      className={cn(
        "mx-auto",
        "w-full",
        "flex justify-center gap-1",
        className
      )}
      data-slot="pagination"
      {...rest}
    />
  );
};

interface PaginationFirstProps
  extends React.ComponentProps<typeof ArkPagination.FirstTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationFirst = (props: PaginationFirstProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.FirstTrigger asChild data-slot="pagination-first">
      <Button variant={variant} {...rest}>
        <ChevronFirstIcon />
        <span className={cn({ "sr-only": !withLabel })}>
          {children || "First"}
        </span>
      </Button>
    </ArkPagination.FirstTrigger>
  );
};

interface PaginationPreviousProps
  extends React.ComponentProps<typeof ArkPagination.PrevTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationPrevious = (props: PaginationPreviousProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.PrevTrigger asChild data-slot="pagination-previous">
      <Button variant={variant} {...rest}>
        <ChevronLeftIcon />
        <span className={cn({ "sr-only": !withLabel })}>
          {children || "Previous"}
        </span>
      </Button>
    </ArkPagination.PrevTrigger>
  );
};

interface PaginationNextProps
  extends React.ComponentProps<typeof ArkPagination.NextTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationNext = (props: PaginationNextProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.NextTrigger asChild data-slot="pagination-next">
      <Button variant={variant} {...rest}>
        <span className={cn({ "sr-only": !withLabel })}>
          {children || "Next"}
        </span>
        <ChevronRightIcon />
      </Button>
    </ArkPagination.NextTrigger>
  );
};

interface PaginationLastProps
  extends React.ComponentProps<typeof ArkPagination.LastTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationLast = (props: PaginationLastProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.LastTrigger asChild data-slot="pagination-last">
      <Button variant={variant} {...rest}>
        <span className={cn({ "sr-only": !withLabel })}>
          {children || "Last"}
        </span>
        <ChevronLastIcon />
      </Button>
    </ArkPagination.LastTrigger>
  );
};

export const PaginationItem = (
  props: React.ComponentProps<typeof ArkPagination.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkPagination.Item asChild data-slot="pagination-item" {...rest}>
      <Button
        className={cn(
          "tabular-nums",
          "data-selected:not-[hover]:bg-transparent dark:data-selected:not-[hover]:bg-input/30",
          "data-selected:not-[hover]:text-foreground",
          "data-selected:not-[hover]:border-input",
          className
        )}
        size="icon-md"
        variant="ghost"
      >
        {children}
      </Button>
    </ArkPagination.Item>
  );
};

export const PaginationItems = (
  props: Omit<React.ComponentProps<typeof ArkPagination.Context>, "children">
) => (
  <ArkPagination.Context data-slot="pagination-item s" {...props}>
    {({ pages }) =>
      pages.map((page, index) =>
        page.type === "page" ? (
          <PaginationItem key={page.value} type="page" value={page.value}>
            {page.value}
          </PaginationItem>
        ) : (
          <PaginationEllipsis index={index} key={`ellipsis-${index}`} />
        )
      )
    }
  </ArkPagination.Context>
);

interface PaginationItemLinkProps extends React.ComponentProps<typeof Button> {
  /**
   * The page number to link to.
   */
  page?: "previous" | "next" | number;
}

export const PaginationItemLink = (props: PaginationItemLinkProps) => {
  const { page, children, ...rest } = props;

  const pagination = usePaginationContext();

  const pageValue = () => {
    if (page === "previous") {
      return pagination.previousPage;
    }

    if (page === "next") {
      return pagination.nextPage;
    }

    return page;
  };

  if (typeof page === "number") {
    return (
      <Button asChild variant="outline" {...rest}>
        <a href={`?page=${pageValue()}`}>{children}</a>
      </Button>
    );
  }

  return (
    <Button asChild variant="ghost" {...rest}>
      <a href={`?page=${pageValue()}`}>{children}</a>
    </Button>
  );
};

export const PaginationEllipsis = (
  props: React.ComponentProps<typeof ArkPagination.Ellipsis>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPagination.Ellipsis
      className={cn(
        "h-8 w-12",
        "flex items-end justify-center",
        "text-muted-foreground",
        "pointer-events-none select-none",
        "[&_svg]:size-4",
        className
      )}
      data-slot="pagination-ellipsis"
      {...rest}
    >
      <EllipsisIcon />
    </ArkPagination.Ellipsis>
  );
};
