import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SignaturePadThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative flex h-24 w-full flex-col rounded-lg border border-input bg-muted shadow-md/5">
      <div className="absolute inset-e-2 top-2 flex size-4 items-center justify-center rounded-xl border border-input bg-muted-foreground/16" />

      <div className="absolute inset-x-4 bottom-4 border-input border-muted-foreground/16 border-b-2" />
    </div>
  </ThumbCard>
);
