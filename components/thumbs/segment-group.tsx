import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SegmentGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-3 rounded-lg border border-input bg-muted p-1 shadow-md/5">
        <div className="flex items-center justify-center rounded-lg bg-primary p-2">
          <div className="h-1.5 w-8 rounded-full bg-primary-foreground" />
        </div>
        <div className="h-1.5 w-8 rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-8 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
