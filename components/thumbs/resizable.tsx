import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ResizableThumb = ({
  description = "",
  title = "Resizable",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex size-full items-center gap-2">
      <div className="flex h-1/2 min-h-0 flex-1 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <span className="text-muted-foreground text-sm">A</span>
      </div>
      <div className="flex shrink-0 items-center justify-center">
        <div className="h-1/3 min-h-8 w-1 rounded-full bg-border" />
      </div>
      <div className="flex h-1/2 min-h-0 flex-1 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <span className="text-muted-foreground text-sm">B</span>
      </div>
    </div>
  </BlockThumbCard>
);
