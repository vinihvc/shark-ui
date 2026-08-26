"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const Diff = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-full min-w-0 flex-col overflow-hidden rounded-xl border bg-card text-card-foreground",
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
        "flex min-w-0 items-center gap-2 border-b bg-muted/48 px-3 py-2 font-mono text-muted-foreground text-xs",
        className
      )}
      data-slot="diff-header"
      {...rest}
    />
  );
};

export const DiffContent = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        "max-h-80 min-w-0 overflow-auto font-mono text-[0.8125rem] leading-6",
        className
      )}
      data-slot="diff-content"
      {...rest}
    />
  );
};

const DIFF_MARKERS = {
  add: "+",
  context: " ",
  delete: "-",
} as const;

const diffLineVariants = tv({
  base: "flex min-h-6 min-w-max px-3",
  defaultVariants: {
    type: "context",
  },
  variants: {
    type: {
      add: "bg-success/10 text-success-foreground",
      context: "text-muted-foreground",
      delete: "bg-destructive/10 text-destructive-foreground",
    },
  },
});

interface DiffLineProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof diffLineVariants> {}

export const DiffLine = (props: DiffLineProps) => {
  const { className, type = "context", children, ...rest } = props;
  const marker = DIFF_MARKERS[type];

  return (
    <div
      className={cn(diffLineVariants({ type }), className)}
      data-slot="diff-line"
      data-type={type}
      {...rest}
    >
      <span className="w-4 shrink-0 select-none">{marker}</span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
};
