import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SidebarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-28 w-full items-stretch gap-2 rounded-lg">
      <div className="flex w-1/3 min-w-14 flex-col gap-2 rounded-lg border border-input border-dashed bg-muted p-2 shadow-md/5">
        <div className="flex w-full flex-col gap-1">
          <div className="h-1.5 w-3/4 rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-1">
          <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-5/6 rounded-full bg-muted-foreground/8" />
          <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex justify-center">
          <div className="h-2 w-full rounded-lg bg-muted-foreground/16" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center rounded-lg border border-input bg-muted shadow-md/5" />
    </div>
  </ThumbCard>
);
