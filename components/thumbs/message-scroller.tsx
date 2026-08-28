import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageScrollerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-24 w-full flex-col gap-2 overflow-hidden rounded-lg border bg-muted p-2">
      <div className="h-6 w-3/5 rounded-lg bg-muted-foreground/16" />
      <div className="ms-auto h-6 w-2/5 rounded-lg bg-primary" />
      <div className="mx-auto size-5 shrink-0 rounded-full border bg-muted-foreground/32 shadow-sm" />
    </div>
  </ThumbCard>
);
