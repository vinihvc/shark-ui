import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ChartThumb = ({
  description = "",
  title = "Chart",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex h-12 items-end gap-1 rounded-lg border bg-muted p-2 shadow-md/5">
      <div className="h-1/3 w-full rounded-t-lg bg-muted-foreground/16" />
      <div className="h-2/3 w-full rounded-t-lg bg-muted-foreground/16" />
      <div className="h-1/4 w-full rounded-t-lg bg-muted-foreground/8" />
      <div className="h-1/2 w-full rounded-t-lg bg-muted-foreground/16" />
      <div className="size-full rounded-t-lg bg-primary" />
    </div>
  </BlockThumbCard>
);
