import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TooltipThumb = ({
  description = "",
  title = "Tooltip",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col items-center gap-2 rounded-xl border bg-muted p-3 shadow-md/5">
      <div className="flex h-8 w-full items-center justify-center rounded-lg border bg-card">
        <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-6 items-center justify-center rounded-full border border-muted-foreground/40">
        <span
          aria-hidden
          className="font-medium text-[10px] text-muted-foreground"
        >
          i
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
