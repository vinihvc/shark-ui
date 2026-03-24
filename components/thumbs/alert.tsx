import { InfoIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AlertThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-4 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <InfoIcon className="size-4 text-muted-foreground/64" />
      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
    </div>
  </ThumbCard>
);
