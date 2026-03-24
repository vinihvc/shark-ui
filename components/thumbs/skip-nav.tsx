import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SkipNavThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-2 rounded-lg border border-input bg-muted p-2 shadow-md/5">
      <div className="flex items-center gap-3">
        <div className="h-4 w-1/3 rounded-md bg-primary" />
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/8" />
      </div>
      <div className="flex w-full gap-3">
        <div className="flex w-1/3 flex-col gap-2">
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
          <div className="h-2 w-1/3 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex flex-1 flex-col gap-2 rounded-md border border-primary border-dashed" />
      </div>
    </div>
  </ThumbCard>
);
