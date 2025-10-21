"use client";

import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Pagination = (
  props: React.ComponentProps<typeof ArkPagination.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPagination.Root
      className={cn(
        "mx-auto w-full",
        "flex flex-row justify-center gap-1",
        className
      )}
      {...rest}
    />
  );
};

interface PaginationContextProps
  extends React.ComponentProps<typeof ArkPagination.Context> {}

export const PaginationContext = (props: PaginationContextProps) => (
  <ArkPagination.Context {...props} />
);

export const PaginationPrevious = (
  props: React.ComponentProps<typeof ArkPagination.PrevTrigger>
) => (
  <ArkPagination.PrevTrigger asChild {...props}>
    <Button variant="ghost">
      <ChevronLeft />
      Previous
    </Button>
  </ArkPagination.PrevTrigger>
);

export const PaginationNext = (
  props: React.ComponentProps<typeof ArkPagination.NextTrigger>
) => (
  <ArkPagination.NextTrigger asChild {...props}>
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
    <ArkPagination.Item asChild {...rest}>
      <Button
        className={cn(
          "w-12",
          "data-[selected]:not-[hover]:bg-primary data-[selected]:not-[hover]:text-primary-foreground",
          className
        )}
        variant="ghost"
      >
        {children}
      </Button>
    </ArkPagination.Item>
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
      {...rest}
    >
      <Ellipsis />
    </ArkPagination.Ellipsis>
  );
};
