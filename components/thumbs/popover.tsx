import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const PopoverThumb = ({
  description = "",
  title = "Popover",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-48 flex-col items-center gap-2">
      <div className="flex w-24 items-center justify-center gap-2 rounded-lg border bg-primary p-3 shadow-md/5">
        <div className="h-2 w-3/4 rounded-full bg-primary-foreground" />
      </div>
      <div className="flex w-full flex-col gap-2 rounded-lg border bg-muted p-2 shadow-md/5">
        <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
        <div className="flex flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
