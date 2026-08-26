import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ConfirmationThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border bg-background p-2">
      <div className="h-3 w-3/4 rounded bg-muted-foreground/24" />
      <div className="flex justify-end gap-2">
        <div className="h-6 w-14 rounded-md bg-muted" />
        <div className="h-6 w-16 rounded-md bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
