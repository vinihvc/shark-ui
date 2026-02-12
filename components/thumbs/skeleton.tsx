import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SkeletonThumb = ({
  description = "",
  title = "Skeleton",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="size-8 shrink-0 rounded-full bg-muted-foreground/16" />
      <div className="flex flex-col gap-1.5">
        <div className="h-2 w-20 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-28 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
