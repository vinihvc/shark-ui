import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PopoverThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 flex-col items-center gap-2">
      <div className="flex w-full flex-col gap-2 rounded-lg border border-input border-dashed bg-muted p-2 shadow-md/5">
        <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
        <div className="flex flex-col gap-1">
          <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
      </div>
      <div className="flex h-8 w-20 items-center justify-center gap-2 rounded-lg border border-input bg-primary shadow-md/5">
        <div className="h-1.5 w-1/2 rounded-full bg-primary-foreground" />
      </div>
    </div>
  </ThumbCard>
);
