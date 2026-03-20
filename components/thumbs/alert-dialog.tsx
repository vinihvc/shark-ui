import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AlertDialogThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="h-2.5 w-full rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
      <div className="flex justify-end gap-2">
        <div className="h-4 w-12 rounded-md border bg-muted-foreground/16" />
        <div className="h-4 w-12 rounded-md border bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
