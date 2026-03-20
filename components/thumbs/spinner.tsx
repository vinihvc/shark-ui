import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SpinnerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="size-8 rounded-full border-3 border-muted-foreground/24 border-r-primary" />
    </div>
  </ThumbCard>
);
