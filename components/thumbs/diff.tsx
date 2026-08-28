import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DiffThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <div className="flex h-5 items-center justify-between border-border/80 border-b px-2">
        <div className="h-1.5 w-16 rounded-sm bg-muted-foreground/40" />
        <div className="h-1.5 w-8 rounded-sm bg-muted-foreground/24" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="w-0.5 bg-transparent" />
        <div className="flex-1 bg-muted-foreground/8" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="w-0.5 bg-muted-foreground/48" />
        <div className="flex-1 bg-muted-foreground/16" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="w-0.5 bg-foreground/40" />
        <div className="flex-1 bg-muted-foreground/20" />
      </div>
    </div>
  </ThumbCard>
);
