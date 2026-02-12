import { MinusIcon, XIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const FloatingPanelThumb = ({
  description = "",
  title = "Floating Panel",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-muted shadow-md/5">
      <div className="flex items-center justify-between gap-2 border-border border-b bg-card px-3 py-2">
        <div className="h-2 w-1/3 min-w-0 rounded-full bg-muted-foreground/16" />
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-muted-foreground/64 text-xs">
            <MinusIcon className="size-3 text-muted-foreground/64" />
          </span>

          <span aria-hidden className="text-muted-foreground/64 text-xs">
            <XIcon className="size-3 text-muted-foreground/64" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
