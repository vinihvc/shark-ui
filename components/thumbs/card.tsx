import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CardThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-40 flex-col gap-3 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="flex flex-col justify-start gap-1">
        <div className="h-2 w-2/5 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-3/5 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col justify-start gap-1">
        <div className="h-2 w-full rounded-lg bg-muted-foreground/8" />
        <div className="h-2 w-2/3 rounded-lg bg-muted-foreground/8" />
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <div className="h-4 w-12 rounded-md border border-input bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
