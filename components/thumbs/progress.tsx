import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ProgressThumb = ({
  description = "",
  title = "Progress",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="relative h-3 w-56 overflow-hidden rounded-full bg-muted-foreground/16">
      <div className="absolute inset-y-0 left-0 w-2/5 rounded-full rounded-r-none bg-primary" />
    </div>
  </BlockThumbCard>
);
