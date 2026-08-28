"use client";

import { ChevronRightIcon } from "lucide-react";
import { useCallback, useRef } from "react";
import {
  CircularProgress,
  CircularProgressValue,
} from "@/registry/react/components/circular-progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { SkeletonText } from "@/registry/react/components/skeleton";
import {
  Toc,
  TocContent,
  TocContext,
  TocItem,
  TocLink,
  TocList,
  TocTitle,
} from "@/registry/react/components/toc";

const Example = () => {
  const contentRef = useRef<HTMLElement>(null);
  const getScrollEl = useCallback(() => contentRef.current, []);

  return (
    <Toc
      className="size-full flex-col items-stretch gap-2 rounded-lg border p-4"
      items={items}
      scrollEl={getScrollEl}
    >
      <Collapsible className="flex w-full flex-col gap-2">
        <TocContext>
          {(toc) => {
            const activeIndex = items.findIndex(
              (item) => item.value === toc.activeItems[0]?.value
            );
            const activeLabel = items[activeIndex]?.label ?? "On this page";
            const value =
              activeIndex === -1 ? 0 : ((activeIndex + 1) / items.length) * 100;

            return (
              <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 rounded-lg border border-border bg-transparent px-3 py-2.5 text-start font-medium text-sm outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
                <span className="flex min-w-0 flex-1 items-center gap-2">
                  <CircularProgress
                    className="shrink-0"
                    size={28}
                    thickness={2.5}
                    value={value}
                  >
                    <CircularProgressValue className="absolute font-semibold text-[10px]">
                      {activeIndex >= 0 ? activeIndex + 1 : "-"}
                    </CircularProgressValue>
                  </CircularProgress>
                  <span className="truncate" key={activeLabel}>
                    {activeLabel}
                  </span>
                </span>
                <span className="inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 motion-reduce:transition-none!">
                  <ChevronRightIcon aria-hidden="true" className="size-4" />
                </span>
              </CollapsibleTrigger>
            );
          }}
        </TocContext>
        <CollapsibleContent>
          <TocTitle className="sr-only">On this page</TocTitle>
          <TocList className="border-s-0">
            {items.map((item, index) => (
              <TocItem className="ps-0" item={item} key={item.value}>
                <TocLink
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 data-active:text-primary"
                  href={`#${item.value}`}
                >
                  <span className="min-w-6 font-semibold text-[0.6875rem] text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </TocLink>
              </TocItem>
            ))}
          </TocList>
        </CollapsibleContent>
      </Collapsible>
      <TocContent className="h-80 overflow-y-auto pe-4" ref={contentRef}>
        <Article />
      </TocContent>
    </Toc>
  );
};

const items = [
  { depth: 2, label: "Overview", lines: 8, value: "04-overview" },
  { depth: 2, label: "Prerequisites", lines: 5, value: "04-prerequisites" },
  { depth: 2, label: "Quick Start", lines: 20, value: "04-quick-start" },
  { depth: 2, label: "Core Commands", lines: 15, value: "04-commands" },
  {
    depth: 2,
    label: "Troubleshooting",
    lines: 12,
    value: "04-troubleshooting",
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
