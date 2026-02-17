import { InfoIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const AlertThumb = ({
  description = "",
  title = "Alert",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-full items-center gap-2 rounded-full border bg-muted p-3 shadow-md/5">
      <InfoIcon className="size-4 text-muted-foreground/64" />
      <div className="h-2 max-w-3/5 flex-1 rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
