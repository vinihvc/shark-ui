import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const DialogThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex flex-col gap-3 rounded-lg border bg-muted p-3 shadow-md/5">
      <div className="h-2.5 w-3/4 rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-4/5 rounded-full bg-muted-foreground/8" />
      <div className="flex justify-end">
        <div className="h-5 w-14 rounded-lg bg-primary" />
      </div>
    </div>
  </BlockThumbCard>
);
