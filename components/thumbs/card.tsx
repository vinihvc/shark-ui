import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const CardThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-40 flex-col gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="flex flex-col justify-start gap-1">
        <div className="h-2 w-2/5 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-3/5 rounded-full bg-muted-foreground/16" />
      </div>

      <div className="flex flex-col justify-start gap-1">
        <div className="h-3 w-full rounded-lg bg-muted-foreground/8" />
        <div className="h-3 w-full rounded-lg bg-muted-foreground/8" />
      </div>
      <div className="flex justify-end">
        <div className="w-16 rounded-lg bg-primary py-2" />
      </div>
    </div>
  </BlockThumbCard>
);
