import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DataListThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-16 shrink-0 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 shrink-0 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-14 shrink-0 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
