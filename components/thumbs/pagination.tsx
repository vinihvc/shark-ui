import { ChevronLeftIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const PaginationThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-48 justify-center gap-4">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <ChevronLeftIcon className="size-4 text-muted-foreground" />
      </div>
      <div className="flex w-full items-center gap-1">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <ChevronLeftIcon className="size-4 rotate-180 text-muted-foreground" />
      </div>
    </div>
  </BlockThumbCard>
);
