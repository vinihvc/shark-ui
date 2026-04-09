import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const HoverCardThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-32 flex-col items-center gap-4">
      <div className="flex w-40 items-center gap-3 rounded-lg border border-input border-dashed bg-muted p-3 shadow-md/5">
        <div className="size-8 shrink-0 rounded-full bg-muted-foreground/16" />
        <div className="flex w-full flex-col gap-1.5">
          <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        </div>
      </div>
      <div className="h-2 w-1/2 rounded-full bg-primary" />
    </div>
  </ThumbCard>
);
