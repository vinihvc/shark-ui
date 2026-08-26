import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TaskThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-success" />
        <div className="h-2 flex-1 rounded bg-muted-foreground/20" />
      </div>
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full border border-muted-foreground/40" />
        <div className="h-2 flex-1 rounded bg-muted-foreground/20" />
      </div>
    </div>
  </ThumbCard>
);
