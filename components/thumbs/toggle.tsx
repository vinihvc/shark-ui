import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ToggleThumb = ({
  description = "",
  title = "Toggle",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="items-cente flex w-full justify-center gap-2">
      <div className="flex size-9 items-center justify-center rounded-lg border bg-muted-foreground/32 shadow-md/5">
        <div className="h-1 w-1/3 rounded-full bg-primary" />
      </div>
      <div className="flex size-9 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <div className="h-1 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
