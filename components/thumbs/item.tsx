import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ItemThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex w-full items-center gap-2">
          <div className="size-6 shrink-0 rounded-lg bg-muted-foreground/16" />
          <div className="flex w-full flex-col gap-1">
            <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
          </div>
        </div>
        <div className="size-4 w-8 shrink-0 rounded-lg bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
