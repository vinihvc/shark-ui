import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SeparatorThumb = ({
  description = "",
  title = "Separator",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="h-px w-full bg-muted-foreground/24" />
      <div className="flex gap-2">
        <div className="h-px flex-1 bg-muted-foreground/16" />
        <div className="h-px flex-1 bg-muted-foreground/16" />
        <div className="h-px flex-1 bg-muted-foreground/16" />
        <div className="h-px flex-1 bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
