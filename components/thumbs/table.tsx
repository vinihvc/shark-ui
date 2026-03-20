import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TableThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex items-center gap-2 border-b pb-2">
        <div className="size-2.5 shrink-0 rounded-lg bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
      </div>
      <div className="flex items-center gap-2 border-b pb-2">
        <div className="size-2.5 shrink-0 rounded-lg bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
      </div>
      <div className="flex items-center gap-2">
        <div className="size-2.5 shrink-0 rounded-lg bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
