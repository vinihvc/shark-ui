import { SearchIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const InputGroupThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex overflow-hidden rounded-lg border bg-muted shadow-md/5">
      <div className="flex size-8 shrink-0 items-center justify-center border-border border-r">
        <SearchIcon className="size-3 text-muted-foreground/64" />
      </div>
      <div className="flex h-8 flex-1 items-center px-3">
        <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center border-border border-l">
        <div className="size-2.5 rounded-lg bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
