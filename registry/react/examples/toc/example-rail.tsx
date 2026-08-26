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
        <TocList className="overflow-visible border-s-0">
          {items.map((item, index) => (
            <TocItem
              className="overflow-visible ps-0"
              item={item}
              key={item.value}
            >
              <TocLink
                className="relative overflow-visible py-[0.35rem] text-[0.8125rem] leading-[1.4]"
                href={`#${item.value}`}
                style={{ paddingInlineStart: textOffset(item.depth) }}
              >
                <Rail
                  depth={item.depth}
                  nextDepth={items[index + 1]?.depth}
                  prevDepth={items[index - 1]?.depth}
                />
                {item.label}
              </TocLink>
            </TocItem>
          ))}
        </TocList>
      </TocNav>
    </Toc>
  );
};

const items = [
  { depth: 2, label: "Overview", lines: 10, value: "07-overview" },
  { depth: 2, label: "Installation", lines: 8, value: "07-installation" },
  {
    depth: 3,
    label: "Package Manager",
    lines: 12,
    value: "07-package-manager",
  },
  {
    depth: 3,
    label: "Peer Dependencies",
    lines: 6,
    value: "07-peer-dependencies",
  },
  { depth: 2, label: "Usage", lines: 14, value: "07-usage" },
  {
    depth: 3,
    label: "Server Components",
    lines: 9,
    value: "07-server-components",
  },
  { depth: 3, label: "Styling", lines: 11, value: "07-styling" },
  { depth: 4, label: "Theming", lines: 7, value: "07-theming" },
  { depth: 2, label: "API Reference", lines: 12, value: "07-api-reference" },
];

// h2 sits at level 0; deeper headings step in, clamped so h5+ share h4's indent
const BASE = 8;
const RAIL_STEP = 8;
const TEXT_STEP = 12;
const MAX_LEVEL = 2;

// the rail overlaps the row above by BRIDGE px so the turn can straddle the boundary
const BRIDGE = 6;

const levelOf = (depth: number) => Math.min(Math.max(depth - 2, 0), MAX_LEVEL);
const lineOffset = (depth: number) => BASE + levelOf(depth) * RAIL_STEP;
const textOffset = (depth: number) => BASE + (levelOf(depth) + 1) * TEXT_STEP;

const Rail = (props: {
  depth: number;
  nextDepth?: number;
  prevDepth?: number;
}) => {
  const { depth, prevDepth = depth, nextDepth = depth } = props;
  const line = lineOffset(depth);
  const prevLine = lineOffset(prevDepth);
  const nextLine = lineOffset(nextDepth);
  const turns = prevLine !== line;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-s-0 -z-10 overflow-visible in-data-active:stroke-foreground stroke-1 stroke-border transition-[stroke]"
      style={{
        height: line === nextLine ? `calc(100% + ${BRIDGE}px)` : "100%",
        top: -BRIDGE,
        width: Math.max(prevLine, line) + 9,
      }}
    >
      {turns ? (
        <path
          d={`M ${prevLine + 0.5} 0 C ${prevLine + 0.5} 8 ${line + 0.5} 4 ${line + 0.5} ${BRIDGE * 2}`}
          fill="none"
        />
      ) : null}
      <line
        x1={line + 0.5}
        x2={line + 0.5}
        y1={turns ? BRIDGE * 2 : BRIDGE}
        y2="100%"
      />
    </svg>
  );
};

const Article = () => (
  <>
    {items.map((item) => {
      let Heading: "h2" | "h3" | "h4" = "h2";
      if (item.depth === 4) {
        Heading = "h4";
      } else if (item.depth === 3) {
        Heading = "h3";
      }

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
