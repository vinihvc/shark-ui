"use client";

import { BookIcon, ExternalLinkIcon } from "lucide-react";
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
        "inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-foreground",
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

interface SourceProps extends React.ComponentProps<"a"> {
  title?: string;
}

export const Source = (props: SourceProps) => {
  const { children, className, href, title, ...rest } = props;

  return (
    <a
      className={cn(
        "inline-flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground text-xs hover:bg-muted hover:text-foreground",
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
      <ExternalLinkIcon
        aria-hidden="true"
        className="size-3 shrink-0 opacity-64"
      />
    </a>
  );
};

interface InlineCitationProps extends React.ComponentProps<"span"> {
  href?: string;
  index?: number;
  title?: string;
}

export const InlineCitation = (props: InlineCitationProps) => {
  const { children, className, href, index, title, ...rest } = props;
  const label = index === undefined ? "Source" : String(index);

  const trigger = (
    <button
      className={cn(
        "ms-0.5 inline-flex size-4 translate-y-[-0.125rem] items-center justify-center rounded-full bg-muted font-medium text-muted-foreground text-xs hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="inline-citation"
      type="button"
      {...rest}
    >
      {children ?? label}
    </button>
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
