import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ToggleGroupThumb = ({
  description = "",
  title = "Toggle Group",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex overflow-hidden rounded-lg border bg-muted shadow-md/5">
      <div className="flex h-8 flex-1 items-center justify-center border-border border-r">
        <div className="h-2 w-6 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex h-8 flex-1 items-center justify-center bg-primary">
        <div className="h-2 w-5 rounded-full bg-muted-foreground/24" />
      </div>
      <div className="flex h-8 flex-1 items-center justify-center border-border border-l">
        <div className="h-2 w-6 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
