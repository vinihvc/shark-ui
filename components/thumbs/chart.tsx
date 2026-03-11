import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ChartThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-1 items-end gap-1.5 px-4 pt-4">
        <div className="h-1/4 min-w-0 flex-1 rounded-t-sm bg-muted-foreground/16" />
        <div className="h-2/5 min-w-0 flex-1 rounded-t-sm bg-muted-foreground/8" />
        <div className="h-3/4 min-w-0 flex-1 rounded-t-sm bg-muted-foreground/16" />
        <div className="h-1/2 min-w-0 flex-1 rounded-t-sm bg-muted-foreground/8" />
        <div className="h-full min-w-0 flex-1 rounded-t-sm bg-muted-foreground/16" />
        <div className="h-2/3 min-w-0 flex-1 rounded-t-sm bg-muted-foreground/8" />
      </div>
      <div aria-hidden className="h-px w-full shrink-0 bg-muted" />
    </div>
  </BlockThumbCard>
);
