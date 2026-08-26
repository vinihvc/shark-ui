import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ModelSelectorThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="h-8 rounded-lg border bg-background" />
      <div className="h-16 rounded-lg border bg-muted/40" />
    </div>
  </ThumbCard>
);
