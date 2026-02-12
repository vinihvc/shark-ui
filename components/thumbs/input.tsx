import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const InputThumb = ({
  description = "",
  title = "Input",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex h-8 items-center px-3">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
