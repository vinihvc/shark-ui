import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PlanThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border bg-background p-2">
      <div className="h-3 w-2/3 rounded bg-muted-foreground/24" />
      <div className="h-2 w-full rounded bg-muted" />
      <div className="h-2 w-5/6 rounded bg-muted" />
    </div>
  </ThumbCard>
);
