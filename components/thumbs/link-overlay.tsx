import { ExternalLink } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const LinkOverlayThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="max-w-40 rounded-lg border border-input bg-muted shadow-md/5">
      <div className="relative flex h-16 w-full items-center justify-center p-3">
        <div className="h-full w-full rounded-md bg-muted-foreground/16" />
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center rounded-md border border-input border-muted-foreground/32 border-dashed"
        >
          <ExternalLink className="size-4 text-muted-foreground/64" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
