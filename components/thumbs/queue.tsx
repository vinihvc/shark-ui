import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QueueThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border p-2">
      <div className="h-3 w-24 rounded bg-muted-foreground/24" />
      <div className="flex items-center gap-2">
        <div className="size-2 rounded-full bg-primary" />
        <div className="h-3 flex-1 rounded bg-muted" />
      </div>
      <div className="flex items-center gap-2">
        <div className="size-2 rounded-full bg-primary" />
        <div className="h-3 flex-1 rounded bg-muted" />
      </div>
    </div>
  </ThumbCard>
);
