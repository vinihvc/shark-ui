import { InfoIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const HintThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-32 flex-col items-center gap-2">
      <div className="flex h-8 w-full items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-6 items-center justify-center rounded-lg border bg-primary shadow-md/5">
        <InfoIcon className="size-3 text-primary-foreground" />
      </div>
    </div>
  </BlockThumbCard>
);
