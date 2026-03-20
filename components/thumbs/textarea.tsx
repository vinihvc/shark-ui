import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TextareaThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative w-52 rounded-lg border bg-muted shadow-md/5">
      <div className="flex h-16 p-3">
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>

      <div className="absolute right-1.5 bottom-1 h-2 w-px rotate-45 bg-muted-foreground/16" />
      <div className="absolute right-1 bottom-1 h-1 w-px rotate-45 bg-muted-foreground/16" />
    </div>
  </ThumbCard>
);
