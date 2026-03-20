import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const RadioGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-40 flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="size-4 shrink-0 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-16 rounded-lg bg-muted-foreground/16" />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary" />
        <div className="h-2 w-20 rounded-lg bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
