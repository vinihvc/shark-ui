"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { AlignLeft } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

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

  if (!data?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "z-10 flex flex-col gap-1 py-2 ps-6 pe-4 text-sm",
        className
      )}
    >
      <p className="inline-flex h-7 items-center gap-2 font-medium text-xs [&_svg]:size-3">
        <AlignLeft aria-hidden />
        On This Page
      </p>

      <div className="relative ms-3.5 flex flex-col gap-0.5 before:absolute before:inset-y-0 before:-left-3.25 before:w-px before:bg-border">
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
    </div>
  );
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
        "relative py-1 leading-4.5 no-underline",
        "text-muted-foreground",
        "transition-colors",
        "before:absolute before:inset-y-px before:-left-3.25 before:w-px before:rounded-full",
        "hover:text-foreground",
        "data-[active=true]:text-foreground",
        "data-[active=true]:before:w-0.5 data-[active=true]:before:bg-primary",
        "data-[depth=3]:ps-3.5",
        "data-[depth=4]:ps-5.5",
        className
      )}
      {...rest}
    />
  );
};
