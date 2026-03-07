import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SliderThumb = ({
  description = "",
  title = "Slider",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-56 items-center gap-1">
      <div className="h-3 w-1/3 rounded-full bg-primary" />
      <div className="size-4 shrink-0 rounded-full bg-primary" />
      <div className="h-3 w-full rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
