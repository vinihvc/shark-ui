import { ClipboardIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ClipboardThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center gap-2">
      <div className="flex h-8 flex-1 items-center rounded-lg border border-input bg-muted px-3 shadow-md/5">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-input bg-primary shadow-md/5">
        <span aria-hidden className="text-primary-foreground">
          <ClipboardIcon className="size-3" />
        </span>
      </div>
    </div>
  </ThumbCard>
);
