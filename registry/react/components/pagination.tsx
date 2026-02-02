"use client";

import {
  Pagination as ArkPagination,
  usePaginationContext,
} from "@ark-ui/react/pagination";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

type PaginationContextType = {};

const PaginationContext = React.createContext({} as PaginationContextType);

interface PaginationProps
  extends React.ComponentProps<typeof ArkPagination.Root>,
    PaginationContextType {}

export const Pagination = (props: PaginationProps) => {
  const { className, ...rest } = props;

  return (
    <PaginationContext.Provider value={{}}>
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
    </PaginationContext.Provider>
  );
};

export const PaginationPrevious = (
  props: React.ComponentProps<typeof ArkPagination.PrevTrigger>
) => (
  <ArkPagination.PrevTrigger asChild data-slot="pagination-previous" {...props}>
    <Button variant="ghost">
      <ChevronLeft />
      Previous
    </Button>
  </ArkPagination.PrevTrigger>
);

export const PaginationNext = (
  props: React.ComponentProps<typeof ArkPagination.NextTrigger>
) => (
  <ArkPagination.NextTrigger asChild data-slot="pagination-next" {...props}>
    <Button variant="ghost">
      Next
      <ChevronRight />
    </Button>
  </ArkPagination.NextTrigger>
);

export const PaginationItem = (
  props: React.ComponentProps<typeof ArkPagination.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkPagination.Item asChild data-slot="pagination-item" {...rest}>
      <Button
        className={cn(
          "data-selected:not-[hover]:bg-transparent dark:data-selected:not-[hover]:bg-input/30",
          "data-selected:not-[hover]:text-foreground",
          "data-selected:not-[hover]:border-border",
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
) => {
  return (
    <ArkPagination.Context data-slot="pagination-item s" {...props}>
      {({ pages }) =>
        pages.map((page, index) =>
          page.type === "page" ? (
            <PaginationItem key={page.value} type="page" value={page.value}>
              {page.value}
            </PaginationItem>
          ) : (
            <PaginationEllipsis index={index} key={index} />
          )
        )
      }
    </ArkPagination.Context>
  );
};

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
      <Ellipsis />
    </ArkPagination.Ellipsis>
  );
};

const _usePaginationContext = () => {
  const context = React.use(PaginationContext);

  if (!context) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }

  return context;
};
