import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SkeletonThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative isolate flex items-center gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="size-8 shrink-0 rounded-full bg-muted-foreground/16" />
      <div className="flex w-full flex-col gap-1.5">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="absolute inset-0 z-10 rounded-lg bg-linear-to-r from-muted/82 via-muted/82 to-transparent" />
    </div>
  </ThumbCard>
);
