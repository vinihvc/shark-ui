import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FrameThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-40 flex-col gap-3 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="flex flex-col gap-1">
        <div className="h-2 w-2/5 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-3/5 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-3 w-full rounded-lg bg-muted-foreground/8" />
        <div className="h-3 w-full rounded-lg bg-muted-foreground/8" />
      </div>
      <div className="border-t border-input pt-3">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
