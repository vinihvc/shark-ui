import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TourThumb = ({ description = "", title = "Tour" }: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-full items-center gap-2">
      <div className="w-1/4 justify-center rounded-lg border p-2 shadow-md/5">
        <div className="h-1 w-full rounded-full bg-muted-foreground/24" />
      </div>

      <div className="relative flex flex-1 flex-col gap-2 rounded-r-md rounded-l-lg bg-muted p-3 shadow-md/5">
        <div className="h-2 w-2/4 rounded bg-muted-foreground/32" />
        <div className="flex flex-col gap-1">
          <div className="h-1 w-full rounded-full bg-muted-foreground/24" />
          <div className="h-1 w-2/3 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex justify-end gap-2 pt-1">
          <div className="h-4 w-12 rounded-md border border-border bg-muted/80" />
          <div className="h-4 w-12 rounded-md bg-primary" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
