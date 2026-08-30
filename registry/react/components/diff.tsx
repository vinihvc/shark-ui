"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";

type DiffLineType = "add" | "context" | "delete";

const DIFF_MARKERS: Record<DiffLineType, string> = {
  add: "+",
  context: "",
  delete: "-",
};

function getDiffLineAriaLabel(
  lineType: DiffLineType,
  line: number | null | undefined
): string | undefined {
  const hasLine = typeof line === "number";

  switch (lineType) {
    case "add":
      return hasLine ? `Line ${line}, added` : "Added line";
    case "delete":
      return hasLine ? `Line ${line}, deleted` : "Deleted line";
    case "context":
      return hasLine ? `Line ${line}` : undefined;
    default: {
      const _exhaustive: never = lineType;
      return _exhaustive;
    }
  }
}

export const Diff = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full min-w-0",
        "flex flex-col",
        "bg-card",
        "font-mono text-card-foreground",
        "rounded-xl border",
        "overflow-hidden",
        className
      )}
      data-slot="diff"
      {...rest}
    />
  );
};

export const DiffHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full min-w-0",
        "flex items-center gap-2",
        "px-4 py-2.5",
        "text-xs",
        "border-b",
        "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        className
      )}
      data-slot="diff-header"
      {...rest}
    />
  );
};

export const DiffFile = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, children, ...rest } = props;

  return (
    <ark.span
      className={cn("inline-flex min-w-0 items-center gap-2", className)}
      data-slot="diff-file"
      {...rest}
    >
      <span className="min-w-0 truncate text-foreground">{children}</span>
    </ark.span>
  );
};

interface DiffStatsProps extends React.ComponentProps<typeof ark.span> {
  /**
   * The number of added lines.
   */
  added?: number;
  /**
   * The number of removed lines.
   */
  removed?: number;
}

export const DiffStats = (props: DiffStatsProps) => {
  const { className, added = 0, removed = 0, ...rest } = props;

  return (
    <ark.span
      aria-label={`${added} added, ${removed} removed`}
      className={cn(
        "inline-flex shrink-0 items-center gap-2",
        "ms-auto",
        "text-xs leading-none",
        className
      )}
      data-slot="diff-stats"
      {...rest}
    >
      <span className="text-success-foreground">+{added}</span>
      <span className="text-destructive-foreground">-{removed}</span>
    </ark.span>
  );
};

export const DiffContent = (props: React.ComponentProps<"div">) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn(
        "min-h-0 w-full min-w-0",
        "flex flex-1 flex-col",
        "overflow-hidden",
        className
      )}
      data-slot="diff-content"
      dir="ltr"
      {...rest}
    >
      <ScrollArea className="min-h-0 w-full flex-1">
        <div className="w-max min-w-full text-xs leading-5">{children}</div>
      </ScrollArea>
    </div>
  );
};

const diffLineVariants = tv({
  base: ["min-h-5 w-full min-w-max", "flex items-stretch"],
  defaultVariants: {
    type: "context",
  },
  variants: {
    type: {
      add: "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]",
      context: "text-muted-foreground",
      delete:
        "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]",
    },
  },
});

const diffGutterVariants = tv({
  base: [
    "sticky left-0 z-1",
    "flex shrink-0 items-center",
    "bg-card",
    "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:content-['']",
    "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-border after:content-['']",
  ],
  defaultVariants: {
    type: "context",
  },
  variants: {
    type: {
      add: [
        "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]",
        "before:bg-success",
      ],
      context: "before:bg-transparent",
      delete: [
        "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]",
        "before:bg-destructive",
      ],
    },
  },
});

interface DiffLineProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof diffLineVariants> {
  /**
   * The line number to display.
   */
  line?: number | null;
}

export const DiffLine = (props: DiffLineProps) => {
  const { className, type = "context", children, line, ...rest } = props;

  const lineType: DiffLineType = type ?? "context";

  return (
    <ark.div
      aria-label={getDiffLineAriaLabel(lineType, line)}
      className={cn(diffLineVariants({ type: lineType }), className)}
      data-slot="diff-line"
      data-type={lineType}
      role="group"
      {...rest}
    >
      <span className={diffGutterVariants({ type: lineType })}>
        <span
          className={cn(
            "w-8",
            "shrink-0",
            "select-none text-center text-muted-foreground text-xs",
            lineType === "add" && "text-success-foreground",
            lineType === "delete" && "text-destructive-foreground"
          )}
          data-slot="diff-line-number"
        >
          {line ?? ""}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "w-4.5",
            "shrink-0",
            "select-none text-center text-muted-foreground text-xs",
            lineType === "add" && "text-success-foreground",
            lineType === "delete" && "text-destructive-foreground"
          )}
          data-slot="diff-line-sign"
        >
          {DIFF_MARKERS[lineType]}
        </span>
      </span>
      <code
        className={cn(
          "ps-2 pe-3",
          "whitespace-pre text-muted-foreground",
          (lineType === "add" || lineType === "delete") && "text-foreground"
        )}
        data-slot="diff-line-code"
      >
        {children}
      </code>
    </ark.div>
  );
};
