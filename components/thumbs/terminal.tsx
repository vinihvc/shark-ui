import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TerminalThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col overflow-hidden rounded-xl border bg-background">
      <div className="h-5 border-b bg-muted/80" />
      <div className="flex flex-col gap-1 p-2">
        <div className="h-2 w-3/4 rounded bg-success/40" />
        <div className="h-2 w-1/2 rounded bg-destructive/40" />
      </div>
    </div>
  </ThumbCard>
);
