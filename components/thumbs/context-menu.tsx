import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ContextMenuThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-1 rounded-lg border bg-muted p-2 shadow-md/5">
      <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-4/5 rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
    </div>
  </ThumbCard>
);
