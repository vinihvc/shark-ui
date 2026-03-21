import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TourThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2">
      <div className="flex w-1/4 justify-center rounded-md border border-input bg-muted p-2 shadow-md/5">
        <div className="h-1 w-full rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-lg border border-input border-dashed bg-muted p-3 shadow-md/5">
        <div className="h-2 w-2/4 rounded-lg bg-muted-foreground/16" />
        <div className="flex flex-col gap-1">
          <div className="h-1 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-1 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex justify-end gap-2 pt-1">
          <div className="h-4 w-12 rounded-md border border-input bg-muted" />
          <div className="h-4 w-12 rounded-md bg-primary" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
