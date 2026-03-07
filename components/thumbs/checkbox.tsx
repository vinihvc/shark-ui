import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const CheckboxThumb = ({
  description = "",
  title = "Checkbox",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-40 flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="size-4 shrink-0 rounded-lg bg-muted-foreground/16" />
        <div className="h-2 w-16 rounded-lg bg-muted-foreground/16" />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex size-4 shrink-0 items-center justify-center rounded-lg border border-primary bg-primary" />
        <div className="h-2 w-20 rounded-lg bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
