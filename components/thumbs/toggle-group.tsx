import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToggleGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 w-40 rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex size-full items-center justify-center border-e border-input">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-full items-center justify-center bg-muted-foreground/16">
        <div className="h-1.5 w-1/2 rounded-full bg-primary" />
      </div>
      <div className="flex size-full items-center justify-center border-s border-input">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
