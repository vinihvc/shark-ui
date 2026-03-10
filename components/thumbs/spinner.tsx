import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SpinnerThumb = ({
  description = "",
  title = "Spinner",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center justify-center">
      <div className="size-8 rounded-full border-3 border-muted-foreground/24 border-r-primary" />
    </div>
  </BlockThumbCard>
);
