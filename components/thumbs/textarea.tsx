import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TextareaThumb = ({
  description = "",
  title = "Textarea",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex h-16 items-end px-3 pt-4 pb-3">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
