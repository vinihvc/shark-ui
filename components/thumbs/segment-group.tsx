import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SegmentGroupThumb = ({
  description = "",
  title = "Segment Group",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-3 rounded-lg border bg-muted p-1 shadow-md/5">
        <div className="flex items-center justify-center rounded-lg bg-primary p-2">
          <div className="h-1.5 w-8 rounded-full bg-primary-foreground" />
        </div>
        <div className="h-1.5 w-8 rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-8 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
