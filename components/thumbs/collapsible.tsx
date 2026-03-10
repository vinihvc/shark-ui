import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const CollapsibleThumb = ({
  description = "",
  title = "Collapsible",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex items-center justify-between gap-2 border-b p-3">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
        <span
          aria-hidden="true"
          className="rotate-180 text-muted-foreground text-xs"
        >
          ⌃
        </span>
      </div>
      <div className="flex flex-col gap-1.5 border-border border-b p-3">
        <div className="flex w-full flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
