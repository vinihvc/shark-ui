import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ResizableThumb = ({
  description = "",
  title = "Resizable",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex h-16 rounded-lg border bg-muted shadow-md/5">
      <div className="flex flex-1 flex-col justify-center gap-1 p-2">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
      </div>
      <div className="w-1 shrink-0 bg-border" />
      <div className="flex flex-1 flex-col justify-center gap-1 p-2">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
