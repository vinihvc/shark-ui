import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TourThumb = ({ description = "", title = "Tour" }: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex items-center gap-2">
        <div className="size-10 shrink-0 rounded-full bg-muted-foreground/16" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="h-5 w-10 rounded-md bg-muted-foreground/16" />
        <div className="h-5 w-10 rounded-md bg-primary" />
      </div>
    </div>
  </BlockThumbCard>
);
