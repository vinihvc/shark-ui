import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ComboboxThumb = ({
  description = "",
  title = "Combobox",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-1.5 rounded-lg border bg-muted p-1.5 shadow-md/5">
      <div className="flex items-center gap-1">
        <div className="flex h-4.5 items-center gap-1 rounded-lg border bg-muted px-1.5">
          <div className="h-1.5 w-4 rounded-lg bg-muted-foreground/16" />
          <span aria-hidden className="text-muted-foreground text-xs">
            ×
          </span>
        </div>
        <div className="flex h-4.5 items-center gap-1 rounded-lg border bg-muted px-1.5">
          <div className="h-1.5 w-3 rounded-lg bg-muted-foreground/16" />
          <span aria-hidden className="text-muted-foreground text-xs">
            ×
          </span>
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
