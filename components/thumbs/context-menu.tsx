import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ContextMenuThumb = ({
  description = "",
  title = "Context Menu",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-1 rounded-lg border bg-muted p-2 shadow-md/5">
      <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-4/5 rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
    </div>
  </BlockThumbCard>
);
