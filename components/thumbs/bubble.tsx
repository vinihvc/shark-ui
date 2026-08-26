import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BubbleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="h-8 w-3/4 rounded-xl bg-primary" />
      <div className="h-8 w-1/2 rounded-xl bg-muted" />
    </div>
  </ThumbCard>
);
