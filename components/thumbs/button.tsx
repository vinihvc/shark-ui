import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ButtonThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 w-24 items-center justify-center gap-2 rounded-lg border border-input bg-muted px-2 shadow-md/5">
      <div className="h-1.5 w-2/3 rounded-full bg-primary-foreground" />
    </div>
  </ThumbCard>
);
