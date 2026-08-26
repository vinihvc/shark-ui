import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-end gap-2">
        <div className="size-6 shrink-0 rounded-full bg-muted-foreground/16" />
        <div className="h-8 w-3/5 rounded-xl bg-primary" />
      </div>
      <div className="flex justify-end">
        <div className="h-8 w-2/5 rounded-xl bg-secondary" />
      </div>
    </div>
  </ThumbCard>
);
