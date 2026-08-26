import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AttachmentThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2 rounded-xl border bg-card p-2 shadow-md/5">
      <div className="size-10 shrink-0 rounded-lg bg-muted-foreground/16" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
