import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AspectRatioThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex aspect-video h-auto w-32 items-center justify-center rounded-lg border border-input bg-muted shadow-md/5">
      <span className="select-none text-muted-foreground text-xs">16:9</span>
    </div>
  </ThumbCard>
);
