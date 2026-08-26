import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageScrollerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative flex h-24 w-full flex-col gap-2 overflow-hidden rounded-lg border bg-background p-2">
      <div className="h-6 w-3/5 rounded-lg bg-muted" />
      <div className="ms-auto h-6 w-2/5 rounded-lg bg-primary/80" />
      <div className="h-6 w-1/2 rounded-lg bg-muted" />
      <div className="absolute start-1/2 bottom-1 size-5 -translate-x-1/2 rounded-full border bg-background shadow-sm" />
    </div>
  </ThumbCard>
);
