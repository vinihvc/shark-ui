import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StatusThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full min-w-0 max-w-40 flex-1 flex-col gap-2">
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="size-2.5 shrink-0 rounded-full bg-primary"
        />
        <div className="flex-1 rounded-md border border-input border-dashed p-1.5">
          <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="size-2.5 shrink-0 rounded-full bg-muted-foreground/64"
        />
        <div className="flex-1 rounded-md border border-input border-dashed p-1.5">
          <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
