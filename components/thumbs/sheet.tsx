import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SheetThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-28 w-full items-stretch gap-2 rounded-lg">
      <div className="flex w-full items-center justify-center rounded-lg border border-input bg-muted shadow-md/5" />
      <div className="flex w-1/3 min-w-14 flex-col gap-2 rounded-lg border border-input border-dashed bg-muted p-2 shadow-md/5">
        <div className="flex">
          <div className="h-1.5 w-6 rounded-full bg-muted-foreground/24" />
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex flex-1" />
        <div className="flex justify-end">
          <div className="h-2 w-2/3 rounded-xs bg-primary" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
