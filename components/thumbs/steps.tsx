import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StepsThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center gap-1 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="size-5 rounded-full border-2 border-input border-primary bg-primary" />
      <div className="h-0.5 flex-1 rounded-full bg-primary" />
      <div className="size-5 rounded-full bg-primary" />
      <div className="h-0.5 flex-1 rounded-full bg-muted-foreground/16" />
      <div className="size-5 rounded-full border-2 border-input border-muted-foreground/16" />
    </div>
  </ThumbCard>
);
