import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ProgressThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative h-3 w-56 overflow-hidden rounded-full bg-muted-foreground/16">
      <div className="absolute inset-s-0 inset-y-0 w-2/5 rounded-full rounded-e-none bg-primary" />
    </div>
  </ThumbCard>
);
