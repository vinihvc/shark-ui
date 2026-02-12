import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const FieldThumb = ({
  description = "",
  title = "Field",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-2">
      <div className="h-2 w-1/4 rounded-full bg-muted-foreground/16" />
      <div className="w-full rounded-lg border bg-muted p-3 shadow-md/5">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="h-1.5 w-2/4 rounded-full bg-muted-foreground/8" />
    </div>
  </BlockThumbCard>
);
