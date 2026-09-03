"use client";

import { ark } from "@ark-ui/react/factory";
import { ArrowUpRightIcon, BookIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

export const Sources = (props: React.ComponentProps<typeof Collapsible>) => {
  const { className, ...rest } = props;

  return (
    <Collapsible
      className={cn("w-full min-w-0 text-sm", className)}
      data-slot="sources"
      {...rest}
    />
  );
};

interface SourcesTriggerProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  count?: number;
}

export const SourcesTrigger = (props: SourcesTriggerProps) => {
  const { children, className, count, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "inline-flex items-center gap-1.5",
        "text-muted-foreground text-xs",
        "hover:text-foreground",
        className
      )}
      data-slot="sources-trigger"
      {...rest}
    >
      {children ?? (
        <>
          <span>Used {count ?? 0} sources</span>
          <CollapsibleIndicator />
        </>
      )}
    </CollapsibleTrigger>
  );
};

export const SourcesContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("mt-2 flex flex-col gap-1", className)}
      data-slot="sources-content"
      {...rest}
    />
  );
};

interface SourceProps extends React.ComponentProps<typeof ark.a> {
  /**
   * The title of the source.
   */
  title?: string;
}

export const Source = (props: SourceProps) => {
  const { href, title, className, children, ...rest } = props;

  return (
    <ark.a
      className={cn(
        "inline-flex min-w-0 items-center gap-2",
        "px-2 py-1.5",
        "text-muted-foreground text-xs",
        "rounded-md",
        "hover:bg-muted hover:text-foreground",
        className
      )}
      data-slot="source"
      href={href}
      rel="noreferrer"
      target="_blank"
      {...rest}
    >
      <BookIcon aria-hidden="true" className="size-3.5 shrink-0" />
      <span className="min-w-0 truncate">{children ?? title}</span>
      <ArrowUpRightIcon
        aria-hidden="true"
        className="size-3 shrink-0 opacity-64"
      />
    </ark.a>
  );
};

interface InlineCitationProps extends React.ComponentProps<typeof ark.button> {
  /**
   * The href of the citation.
   */
  href?: string;
  /**
   * The index of the citation.
   */
  index?: number;
  /**
   * The title of the citation.
   */
  title?: string;
}

export const InlineCitation = (props: InlineCitationProps) => {
  const { href, index, title, className, children, ...rest } = props;

  const label = index === undefined ? "Source" : String(index);

  const trigger = (
    <ark.button
      className={cn(
        "size-4",
        "inline-flex items-center justify-center",
        "ms-0.5",
        "bg-muted",
        "font-medium text-muted-foreground text-xs",
        "rounded-full",
        "-translate-y-0.5",
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="inline-citation"
      type="button"
      {...rest}
    >
      {children ?? label}
    </ark.button>
  );

  if (!(title || href)) {
    return trigger;
  }

  return (
    <HoverCard positioning={{ placement: "top" }}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent className="w-64 gap-1 p-3 text-xs">
        {title ? <p className="font-medium text-foreground">{title}</p> : null}
        {href ? (
          <a
            className="break-all text-muted-foreground underline-offset-2 hover:underline"
            href={href}
            rel="noreferrer"
            target="_blank"
          >
            {href}
          </a>
        ) : null}
      </HoverCardContent>
    </HoverCard>
  );
};
