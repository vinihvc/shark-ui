import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ToggleGroupThumb = ({
  description = "",
  title = "Toggle Group",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex h-8 w-40 rounded-lg border bg-muted shadow-md/5">
      <div className="flex size-full items-center justify-center border-r">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-full items-center justify-center bg-muted-foreground/16">
        <div className="h-1.5 w-1/2 rounded-full bg-primary" />
      </div>
      <div className="flex size-full items-center justify-center border-l">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
