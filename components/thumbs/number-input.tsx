import { MinusIcon, PlusIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const NumberInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-40 overflow-hidden rounded-lg border bg-muted shadow-md/5">
      <div className="flex size-8 shrink-0 items-center justify-center border-border border-e">
        <MinusIcon className="size-3 text-muted-foreground/64" />
      </div>
      <div className="flex h-8 flex-1 items-center justify-center px-2">
        <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center border-border border-s">
        <PlusIcon className="size-3 text-muted-foreground/64" />
      </div>
    </div>
  </ThumbCard>
);
