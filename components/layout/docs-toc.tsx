"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { AlignLeftIcon, CircleArrowUpIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Presence } from "@/registry/react/components/presence";

interface DocsTableOfContentsProps extends React.ComponentProps<"div"> {
  /**
   * The table of contents data
   */
  data: TOCItemType[];
}

export const DocsTableOfContents = (props: DocsTableOfContentsProps) => {
  const { data, className } = props;

  const itemIds = React.useMemo(
    () => data.map((item) => item.url.replace("#", "")),
    [data]
  );
  const activeHeading = useActiveItem(itemIds);
  const showScrollToTop = useShowScrollToTop();

  if (!data?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "z-10",
        "flex flex-col gap-1",
        "py-2 ps-6 pe-4",
        "text-sm",
        className
      )}
    >
      <p className="inline-flex h-7 items-center gap-2 font-medium text-xs">
        <AlignLeftIcon aria-hidden className="size-3" />
        On This Page
      </p>

      <div className="relative ms-4.5 flex flex-col gap-0.5 before:absolute before:inset-y-0 before:-left-3.25 before:w-px before:bg-border">
        {data.map((item) => (
          <TOCItem
            data-active={item.url === `#${activeHeading}`}
            data-depth={item.depth}
            href={item.url}
            key={item.url}
          >
            {item.title}
          </TOCItem>
        ))}
      </div>

      <Presence
        className={cn(
          "mt-2 ps-3.5",
          "duration-200",
          "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=open]:animate-in"
        )}
        present={showScrollToTop}
      >
        <TOCItem
          className="inline-flex items-center gap-2"
          data-active={false}
          data-depth={0}
          href="#page-title"
        >
          <CircleArrowUpIcon aria-hidden className="size-4" /> Scroll to top
        </TOCItem>
      </Presence>
    </div>
  );
};

const useShowScrollToTop = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const updateVisibility = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold = scrollableHeight * 0.3;
      setShow(window.scrollY >= threshold);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return show;
};

const useActiveItem = (itemIds: string[]) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Default to first item on mount if nothing is active yet
    if (!activeId && itemIds?.length) {
      setActiveId(itemIds[0] ?? null);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    for (const id of itemIds ?? []) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, [itemIds, activeId]);

  return activeId;
};

const TOCItem = (props: React.ComponentProps<"a">) => {
  const { className, ...rest } = props;

  return (
    <a
      className={cn(
        "relative",
        "-mx-1 px-2 py-1",
        "text-muted-foreground leading-4.5",
        "rounded-md border border-transparent no-underline",
        "transition-colors",
        "before:absolute before:inset-y-px before:-left-3 before:w-px before:translate-x-0.5",
        "hover:text-foreground",
        "data-[active=true]:text-foreground",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-[active=true]:before:w-0.5 data-[active=true]:before:bg-primary",
        "data-[depth=3]:ps-3.5",
        "data-[depth=4]:ps-5.5",
        className
      )}
      {...rest}
    />
  );
};
