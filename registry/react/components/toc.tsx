"use client";

import {
  Toc as ArkToc,
  useToc as useArkToc,
  useTocContext as useArkTocContext,
} from "@ark-ui/react/toc";
import type React from "react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export const useToc = useArkToc;
export const useTocContext = useArkTocContext;
export const TocContext = ArkToc.Context;

export type { TocActiveChangeDetails, TocItemData } from "@ark-ui/react/toc";

export const Toc = (props: React.ComponentProps<typeof ArkToc.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.Root
      className={cn("flex items-start gap-8", className)}
      data-slot="toc"
      {...rest}
    />
  );
};

export const TocRootProvider = (
  props: React.ComponentProps<typeof ArkToc.RootProvider>
) => {
  const { className, style, value, ...rest } = props;
  const rootProps = value.getRootProps();

  return (
    <ArkToc.RootProvider
      className={cn("flex items-start gap-8", className)}
      data-slot="toc"
      style={{ ...rootProps.style, ...style }}
      value={value}
      {...rest}
    />
  );
};

export const TocContent = (
  props: React.ComponentProps<typeof ArkToc.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.Content
      className={cn(
        "min-w-0 flex-1",
        "[&_h2]:scroll-mt-4 [&_h3]:scroll-mt-4",
        className
      )}
      data-slot="toc-content"
      {...rest}
    />
  );
};

export const TocNav = (props: React.ComponentProps<typeof ArkToc.Nav>) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.Nav
      className={cn(
        "sticky top-0 w-40 shrink-0",
        "text-sm",
        "data-[placement=left]:order-first",
        className
      )}
      data-slot="toc-nav"
      {...rest}
    />
  );
};

export const TocTitle = (props: React.ComponentProps<typeof ArkToc.Title>) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.Title
      className={cn("mb-2 font-medium text-foreground", className)}
      data-slot="toc-title"
      {...rest}
    />
  );
};

export const TocList = (props: React.ComponentProps<typeof ArkToc.List>) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.List
      className={cn(
        "relative flex flex-col",
        "border-border border-s",
        className
      )}
      data-slot="toc-list"
      {...rest}
    />
  );
};

export const TocIndicator = (
  props: React.ComponentProps<typeof ArkToc.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.Indicator
      className={cn(
        "absolute inset-s-0 w-0.5 rounded-full bg-foreground",
        "h-(--height) -translate-x-1/2 translate-y-(--top) rtl:translate-x-1/2",
        "transition-[height,translate] duration-200",
        "motion-reduce:transition-none!",
        className
      )}
      data-slot="toc-indicator"
      {...rest}
    />
  );
};

export const TocItem = (props: React.ComponentProps<typeof ArkToc.Item>) => {
  const { className, ...rest } = props;

  return (
    <ArkToc.Item
      className={cn("ps-[calc((var(--depth)-2)*0.75rem+0.75rem)]", className)}
      data-slot="toc-item"
      {...rest}
    />
  );
};

const scrollHashIntoTocContent = (
  event: React.MouseEvent<HTMLAnchorElement>
) => {
  if (event.defaultPrevented) {
    return;
  }

  const href = event.currentTarget.getAttribute("href");
  const hash = href?.startsWith("#") ? href.slice(1) : undefined;
  if (!hash) {
    return;
  }

  const heading = event.currentTarget.ownerDocument.getElementById(hash);
  const container = heading?.closest("[data-slot=toc-content]");
  if (!(heading instanceof HTMLElement && container instanceof HTMLElement)) {
    return;
  }

  event.preventDefault();
  const top =
    heading.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop;
  container.scrollTo({ behavior: "smooth", top });
};

export const TocLink = (props: React.ComponentProps<typeof ArkToc.Link>) => {
  const { className, onClick, ...rest } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      scrollHashIntoTocContent(event);
    },
    [onClick]
  );

  return (
    <ArkToc.Link
      className={cn(
        "block py-1",
        "text-muted-foreground",
        "hover:text-foreground",
        "data-active:font-medium data-active:text-foreground",
        "outline-none focus-visible:text-foreground",
        className
      )}
      data-slot="toc-link"
      onClick={handleClick}
      {...rest}
    />
  );
};
