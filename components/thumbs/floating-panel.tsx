import { MinusIcon, XIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FloatingPanelThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col overflow-hidden rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex items-center justify-between gap-2 border-input border-b bg-muted px-3 py-2">
        <div className="h-2 w-1/3 min-w-0 rounded-full bg-muted-foreground/16" />
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-muted-foreground/64">
            <MinusIcon className="size-3 text-muted-foreground/64" />
          </span>

          <span aria-hidden className="text-muted-foreground/64">
            <XIcon className="size-3 text-muted-foreground/64" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
