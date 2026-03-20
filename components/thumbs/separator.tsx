import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SeparatorThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-56 flex-col gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex flex-col gap-2">
        <div className="h-2 w-2/3 shrink-0 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full shrink-0 rounded-full bg-muted-foreground/8" />
      </div>

      <div className="h-px w-full shrink-0 bg-border" />

      <div className="flex h-4 items-center gap-2">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/8" />
        <div className="h-full w-px shrink-0 bg-border" />
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
