import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ActionBarThumb = ({
  description = "",
  title = "Action Bar",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="h-1.5 w-16 rounded-full bg-muted-foreground/16" />
        <div className="ms-auto flex gap-1.5">
          <div className="size-5 rounded-md bg-muted-foreground/8" />
          <div className="size-5 rounded-md bg-muted-foreground/8" />
          <div className="size-5 rounded-md bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
