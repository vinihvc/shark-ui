import { InfoIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const AlertThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-full items-center gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
      <InfoIcon className="size-4 text-muted-foreground/64" />
      <div className="h-2 max-w-3/5 flex-1 rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
