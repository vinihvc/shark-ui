import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const StepsThumb = ({
  description = "",
  title = "Steps",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center gap-1 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="size-5 rounded-full border-2 border-primary bg-primary" />
      <div className="h-0.5 flex-1 rounded-full bg-muted-foreground/16" />
      <div className="size-5 rounded-full border-2 border-muted-foreground/16" />
      <div className="h-0.5 flex-1 rounded-full bg-muted-foreground/16" />
      <div className="size-5 rounded-full border-2 border-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
