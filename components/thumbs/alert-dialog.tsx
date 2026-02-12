import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const AlertDialogThumb = ({
  description = "",
  title = "Alert Dialog",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="h-2.5 w-full rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
      <div className="flex justify-end gap-2">
        <div className="h-5 w-12 rounded-lg border bg-muted-foreground/16" />
        <div className="h-5 w-12 rounded-lg border bg-primary" />
      </div>
    </div>
  </BlockThumbCard>
);
