import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const AspectRatioThumb = ({
  description = "",
  title = "Aspect Ratio",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex aspect-video h-auto w-32 items-center justify-center rounded-lg border bg-muted shadow-md/5">
      <span className="select-none text-muted-foreground text-xs">16:9</span>
    </div>
  </BlockThumbCard>
);
