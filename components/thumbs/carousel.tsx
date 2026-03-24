import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CarouselThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 flex-col items-center gap-1.5 rounded-lg border border-input bg-muted p-2 shadow-md/5">
      <div className="flex w-full items-center gap-2">
        <div className="relative size-3 shrink-0 rounded-full border border-input bg-muted-foreground/8" />
        <div className="size-20 w-full rounded-lg border border-input bg-muted-foreground/16" />
        <div className="size-20 w-full rounded-lg border border-input bg-muted-foreground/16" />
        <div className="relative size-3 shrink-0 rounded-full border border-input bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
