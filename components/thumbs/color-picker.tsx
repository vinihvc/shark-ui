import { PipetteIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ColorPickerThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex w-24 items-center justify-center gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
      </div>

      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-primary shadow-md/5">
        <PipetteIcon className="size-4 text-primary-foreground" />
      </div>
    </div>
  </BlockThumbCard>
);
