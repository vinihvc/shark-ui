"use client";

import { useCallback, useRef } from "react";
import { SkeletonText } from "@/registry/react/components/skeleton";
import {
  Toc,
  TocContent,
  TocIndicator,
  TocItem,
  TocLink,
  TocList,
  TocNav,
  TocTitle,
} from "@/registry/react/components/toc";

const Example = () => {
  const contentRef = useRef<HTMLElement>(null);
  const getScrollEl = useCallback(() => contentRef.current, []);

  return (
    <Toc
      className="size-full rounded-lg border p-4"
      items={items}
      scrollEl={getScrollEl}
    >
      <TocContent className="h-80 overflow-y-auto pe-4" ref={contentRef}>
        <Article />
      </TocContent>
      <TocNav>
        <TocTitle>On this page</TocTitle>
        <TocList>
          <TocIndicator />
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
  {
    depth: 2,
    label: "Validation Pending",
    lines: 5,
    value: "06-step-validation",
  },
  {
    depth: 2,
    label: "Asset Uploading",
    lines: 90,
    value: "06-upload-progress",
  },
  {
    depth: 2,
    label: "Server Sync Active",
    lines: 12,
    value: "06-deployment-sync",
  },
  { depth: 2, label: "CI/CD Running", lines: 105, value: "06-build-pipeline" },
  {
    depth: 2,
    label: "DB Connection Stable",
    lines: 3,
    value: "06-database-health",
  },
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

export default Example;
