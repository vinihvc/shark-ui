import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MarkerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2">
      <div className="h-px min-w-0 flex-1 bg-border" />
      <div className="h-2 w-16 rounded-full bg-muted-foreground/16" />
      <div className="h-px min-w-0 flex-1 bg-border" />
    </div>
  </ThumbCard>
);
