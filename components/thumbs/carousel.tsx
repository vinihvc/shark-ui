import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const CarouselThumb = ({
  description = "",
  title = "Carousel",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-48 flex-col items-center gap-1.5 rounded-lg border bg-muted p-2 shadow-md/5">
      <div className="flex w-full items-center gap-2">
        <div className="relative size-3 shrink-0 rounded-full border bg-muted-foreground/8" />
        <div className="size-20 w-full rounded-lg border bg-muted-foreground/16" />
        <div className="size-20 w-full rounded-lg border bg-muted-foreground/16" />
        <div className="relative size-3 shrink-0 rounded-full border bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
