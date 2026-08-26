import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DiffThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col overflow-hidden rounded-xl border">
      <div className="h-5 bg-destructive/20" />
      <div className="h-5 bg-success/20" />
      <div className="h-5 bg-muted" />
    </div>
  </ThumbCard>
);
