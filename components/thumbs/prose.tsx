import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ProseThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-3 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="flex flex-col gap-1">
        <div className="h-3 w-2/4 rounded-lg bg-muted-foreground/16" />
        <div className="h-1.5 w-1/4 rounded-lg bg-muted-foreground/8" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2 w-full rounded-lg bg-muted-foreground/8" />
        <div className="h-2 w-3/4 rounded-lg bg-muted-foreground/8" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="size-2 rounded-lg bg-muted-foreground/8" />
          <div className="h-2 w-1/4 rounded-lg bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
