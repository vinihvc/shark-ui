import { SearchIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const CommandThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex flex-col overflow-hidden rounded-xl border bg-muted shadow-md/5">
      <div className="flex items-center gap-2 border-b border-input/30 bg-input/30 p-1">
        <SearchIcon aria-hidden className="size-3 shrink-0 opacity-50" />
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-1.5 p-1">
        <div className="flex w-full justify-between gap-10">
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-6 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-6 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
