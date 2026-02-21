import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ShowThumb = ({ description = "", title = "Show" }: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex items-center justify-center gap-3 p-3">
        <div className="flex flex-col gap-1">
          <div className="size-6 rounded-md bg-muted-foreground/16" />
          <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex flex-col gap-1 opacity-40">
          <div className="size-6 rounded-md bg-muted-foreground/8" />
          <div className="h-2 w-8 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
