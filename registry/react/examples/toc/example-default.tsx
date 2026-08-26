"use client";

import { useCallback, useRef } from "react";
import { SkeletonText } from "@/registry/react/components/skeleton";
import {
  Toc,
  TocContent,
  TocItem,
  TocLink,
  TocList,
  TocNav,
  TocTitle,
} from "@/registry/react/components/toc";

const TocDemo = () => {
  const contentRef = useRef<HTMLElement>(null);
  const getScrollEl = useCallback(() => contentRef.current, []);

  return (
    <Toc
      autoScroll={false}
      className="size-full rounded-lg border p-4"
      items={items}
      scrollEl={getScrollEl}
    >
      <TocContent
        className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20 h-80 overflow-y-auto pe-4"
        ref={contentRef}
      >
        <Article />
      </TocContent>
      <TocNav>
        <TocTitle>On this page</TocTitle>
        <TocList>
          {items.map((item) => (
            <TocItem item={item} key={item.value}>
              <TocLink href={`#${item.value}`}>{item.label}</TocLink>
            </TocItem>
          ))}
        </TocList>
      </TocNav>
    </Toc>
  );
};

const items = [
  { depth: 2, label: "Introduction", lines: 12, value: "01-introduction" },
  {
    depth: 2,
    label: "Getting Started",
    lines: 10,
    value: "01-getting-started",
  },
  { depth: 2, label: "Installation", lines: 8, value: "01-installation" },
  { depth: 2, label: "Usage", lines: 14, value: "01-usage" },
  { depth: 2, label: "Conclusion", lines: 10, value: "01-conclusion" },
];

const Article = () => (
  <>
    {items.map((item) => (
      <section className="flex flex-col gap-3 pb-8" key={item.value}>
        <h2 className="font-semibold text-lg" id={item.value}>
          {item.label}
        </h2>
        <SkeletonText
          aria-hidden="true"
          className="animate-none **:[div]:h-2"
          lines={item.lines}
        />
      </section>
    ))}
  </>
);

export default TocDemo;
