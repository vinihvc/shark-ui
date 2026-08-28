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
  { depth: 2, label: "Importance", lines: 10, value: "02-importance" },
  { depth: 2, label: "Integrations", lines: 12, value: "02-integrations" },
  { depth: 3, label: "Free Blocks", lines: 8, value: "02-free-blocks" },
  { depth: 3, label: "Configuration", lines: 14, value: "02-configuration" },
  { depth: 2, label: "API Reference", lines: 10, value: "02-api-reference" },
  { depth: 3, label: "Hooks", lines: 8, value: "02-hooks" },
  { depth: 3, label: "Components", lines: 12, value: "02-components" },
  { depth: 2, label: "Examples", lines: 10, value: "02-examples" },
];

const Article = () => (
  <>
    {items.map((item) => {
      const Heading = item.depth === 3 ? "h3" : "h2";

      return (
        <section className="flex flex-col gap-3 pb-8" key={item.value}>
          <Heading
            className={
              item.depth === 2 ? "font-semibold text-lg" : "font-medium"
            }
            id={item.value}
          >
            {item.label}
          </Heading>
          <SkeletonText
            aria-hidden="true"
            className="animate-none **:[div]:h-2"
            lines={item.lines}
          />
        </section>
      );
    })}
  </>
);

export default Example;
