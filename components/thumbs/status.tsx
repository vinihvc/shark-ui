import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StatusThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="rounded-lg border bg-muted/32 p-3 shadow-md/5">
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2.5 shrink-0 rounded-full bg-primary"
          />
          <div className="flex-1 rounded-md border border-muted-foreground/24 border-dashed p-1.5 opacity-40">
            <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2.5 shrink-0 rounded-full bg-muted-foreground/64"
          />
          <div className="flex-1 rounded-md border border-muted-foreground/24 border-dashed p-1.5 opacity-40">
            <div className="h-2 w-1/2 rounded-full bg-muted-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  </ThumbCard>
);
