import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToolThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border bg-background p-2">
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded bg-muted-foreground/24" />
        <div className="h-3 w-12 rounded-full bg-info/40" />
      </div>
      <div className="h-10 rounded-md bg-muted" />
    </div>
  </ThumbCard>
);
