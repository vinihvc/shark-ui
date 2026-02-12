import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SliderThumb = ({
  description = "",
  title = "Slider",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-full items-center rounded-lg border bg-muted px-3 py-4 shadow-md/5">
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted-foreground/16">
        <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary" />
        <div className="absolute top-1/2 left-1/3 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-primary" />
      </div>
    </div>
  </BlockThumbCard>
);
