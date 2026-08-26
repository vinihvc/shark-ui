import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TocThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 gap-3 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="flex flex-1 flex-col gap-2 py-1">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-4/5 rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-3/5 rounded-full bg-muted-foreground/8" />
      </div>
      <div className="flex w-16 flex-col gap-1.5 border-border border-s ps-2">
        <div className="h-1.5 w-full rounded-full bg-foreground/48" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/16" />
        <div className="ms-2 h-1.5 w-3/5 rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
