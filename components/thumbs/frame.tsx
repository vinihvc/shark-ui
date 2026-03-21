import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FrameThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-40 flex-col gap-2 rounded-lg border border-input bg-muted p-1 shadow-md/5">
      <div className="flex flex-col gap-1 rounded-md p-2">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/8" />
        <div className="h-1.5 w-3/4 rounded-full bg-muted-foreground/8" />
      </div>
      <div className="flex flex-col gap-1 rounded-md bg-muted-foreground/8 p-2">
        <div className="h-1.5 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
