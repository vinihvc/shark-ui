import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ButtonGroupThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-32 overflow-hidden rounded-lg border bg-muted shadow-md/5">
      <div className="flex flex-1 items-center justify-center border-border border-r p-3">
        <div className="h-2 w-4 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-1 items-center justify-center border-border border-r p-3">
        <div className="h-2 w-4 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-1 items-center justify-center p-3">
        <div className="h-2 w-4 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
