import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StateThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col items-center gap-2 rounded-lg border border-input border-dashed bg-muted p-3">
      <div className="size-6 rounded-md bg-muted-foreground/16" />
      <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
      <div className="h-1.5 w-3/4 rounded-full bg-muted-foreground/16" />
      <div className="mt-1 h-3 w-1/3 rounded-md bg-primary" />
    </div>
  </ThumbCard>
);
