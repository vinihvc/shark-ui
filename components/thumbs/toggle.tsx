import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ToggleThumb = ({
  description = "",
  title = "Toggle",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted p-3 shadow-md/5">
      {/* Off state */}
      <div className="flex size-10 items-center justify-center rounded-lg border bg-card">
        <span aria-hidden className="font-medium text-muted-foreground text-sm">
          −
        </span>
      </div>
      {/* On state */}
      <div className="flex size-10 items-center justify-center rounded-lg border bg-card">
        <span aria-hidden className="font-medium text-foreground text-sm">
          −
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
