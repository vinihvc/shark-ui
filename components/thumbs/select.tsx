import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SelectThumb = ({
  description = "",
  title = "Select",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center gap-2 rounded-lg border bg-muted shadow-md/5">
      <div className="flex h-8 flex-1 items-center justify-center">
        <div className="h-2 w-16 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="pr-2">
        <span aria-hidden className="rotate-180 text-muted-foreground text-xs">
          ⌃
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
