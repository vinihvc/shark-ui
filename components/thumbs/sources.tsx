import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SourcesThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="h-3 w-28 rounded bg-muted-foreground/24" />
      <div className="h-8 rounded-md bg-muted" />
      <div className="h-8 rounded-md bg-muted" />
    </div>
  </ThumbCard>
);
