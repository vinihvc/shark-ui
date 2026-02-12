import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const KbdThumb = ({ description = "", title = "Kbd" }: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex justify-center gap-1.5">
      <div className="flex size-12 items-center justify-center rounded border bg-card shadow-md/5">
        <span
          aria-hidden
          className="font-medium text-base text-muted-foreground"
        >
          ⌘
        </span>
      </div>
      <div className="flex size-12 items-center justify-center rounded border bg-card shadow-md/5">
        <span
          aria-hidden
          className="font-medium text-base text-muted-foreground"
        >
          K
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
