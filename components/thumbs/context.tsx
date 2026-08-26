import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ContextThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center justify-center gap-2">
      <div className="size-8 rounded-full border-2 border-muted-foreground/30 border-t-foreground" />
      <div className="h-3 w-10 rounded bg-muted-foreground/24" />
    </div>
  </ThumbCard>
);
