import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ScrollAreaThumb = ({
  description = "",
  title = "Scroll Area",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-4/5 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
      </div>
      <div className="w-1 shrink-0 rounded-full bg-muted-foreground/24" />
    </div>
  </BlockThumbCard>
);
