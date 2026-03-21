import { XIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ComboboxThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 items-center rounded-lg border border-input bg-muted px-1.5 shadow-md/5">
      <div className="flex items-center gap-1">
        <div className="flex h-4.5 items-center gap-1 rounded-lg border border-input bg-muted px-1.5">
          <div className="h-1.5 w-4 rounded-lg bg-muted-foreground/16" />
          <span aria-hidden className="text-muted-foreground text-xs">
            <XIcon className="size-2" />
          </span>
        </div>
        <div className="flex h-4.5 items-center gap-1 rounded-lg border border-input bg-muted px-1.5">
          <div className="h-1.5 w-6 rounded-lg bg-muted-foreground/16" />
          <span aria-hidden className="text-muted-foreground text-xs">
            <XIcon className="size-2" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-lg border border-input border-dashed bg-muted p-3 shadow-md/5">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
          <div className="ms-auto h-2 w-4 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="size-2 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
          <div className="ms-auto h-2 w-4 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
