import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FloatThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative h-16 w-16">
      <div className="size-full rounded-lg border border-input bg-muted-foreground/16 shadow-md/5" />
      <div className="absolute -inset-e-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
    </div>
  </ThumbCard>
);
