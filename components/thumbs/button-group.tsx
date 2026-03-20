import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ButtonGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-32 overflow-hidden rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex flex-1 items-center justify-center border-input border-r p-3">
        <div className="h-2 w-4 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-1 items-center justify-center border-input border-r p-3">
        <div className="h-2 w-4 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-1 items-center justify-center p-3">
        <div className="h-2 w-4 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
