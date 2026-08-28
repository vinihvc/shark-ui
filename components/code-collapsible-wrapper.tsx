"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

const CONTENT_ID = "code-collapsible-content";

interface CodeCollapsibleWrapperProps extends React.ComponentProps<"div"> {
  collapsedHeight?: string;
}

export const CodeCollapsibleWrapper = (props: CodeCollapsibleWrapperProps) => {
  const { className, children, collapsedHeight = "256px", ...rest } = props;

  const [isOpened, setIsOpened] = React.useState(false);
  const [hasToggled, setHasToggled] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState<number | null>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const element = contentRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => {
      setContentHeight(element.scrollHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const toggle = () => {
    setHasToggled(true);
    setIsOpened((value) => !value);
  };

  const getContentHeight = () => {
    if (!isOpened) {
      return "var(--collapsed-height)";
    }
    if (contentHeight) {
      return "var(--height)";
    }
    return collapsedHeight;
  };

  const heightStyle = {
    "--collapsed-height": collapsedHeight,
    "--height": contentHeight ? `${contentHeight}px` : undefined,
    height: getContentHeight(),
  } as React.CSSProperties;

  return (
    <div className={cn("relative md:-mx-1", className)} {...rest}>
      <div className="absolute inset-e-10 top-1.5 z-10 flex items-center">
        <Button
          aria-controls={CONTENT_ID}
          aria-expanded={isOpened}
          className="text-muted-foreground"
          onClick={toggle}
          type="button"
          variant="ghost"
        >
          {isOpened ? "Collapse" : "Expand"}
        </Button>
      </div>

      <div className="mt-6">
        <div
          className={cn(
            "overflow-hidden",
            "transition-[height] duration-200",
            hasToggled && (isOpened ? "animate-expand" : "animate-collapse"),
            "motion-reduce:animate-none! motion-reduce:transition-none!"
          )}
          style={heightStyle}
        >
          <div
            className="relative overflow-hidden [&>figure]:mt-0 [&>figure]:md:mx-0!"
            id={CONTENT_ID}
            ref={contentRef}
          >
            {children}
          </div>
        </div>
      </div>

      {isOpened ? null : (
        <button
          aria-controls={CONTENT_ID}
          aria-expanded={isOpened}
          className={cn(
            "absolute inset-x-0 -bottom-4",
            "h-20",
            "flex items-center justify-center",
            "bg-linear-to-b from-transparent via-background/64 to-background",
            "font-medium text-muted-foreground text-sm",
            "rounded-b-lg border border-t-0",
            "transition-colors",
            "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
            "hover:text-foreground"
          )}
          onClick={toggle}
          type="button"
        >
          Expand
        </button>
      )}
    </div>
  );
};
