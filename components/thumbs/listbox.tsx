import { CheckIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ListboxThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-48 flex-col gap-1 rounded-lg border bg-muted p-2 shadow-md/5">
      <div className="flex h-6 items-center gap-2 rounded-md px-2 py-1.5">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex h-6 items-center justify-between gap-2 rounded-md bg-muted-foreground/8 px-2 py-1.5">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
        <CheckIcon className="size-3 text-muted-foreground/64" />
      </div>
      <div className="flex h-6 items-center gap-2 rounded-md px-2 py-1.5">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
