import { SearchIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex overflow-hidden rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex size-8 shrink-0 items-center justify-center border-border border-input border-r">
        <SearchIcon className="size-3 text-muted-foreground/64" />
      </div>
      <div className="flex h-8 flex-1 items-center px-3">
        <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center border-border border-input border-l">
        <div className="size-2.5 rounded-lg bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
