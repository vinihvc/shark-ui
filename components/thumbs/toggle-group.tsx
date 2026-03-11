import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ToggleGroupThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex h-8 w-40 rounded-lg border bg-muted shadow-md/5">
      <div className="flex size-full items-center justify-center border-e">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-full items-center justify-center bg-muted-foreground/16">
        <div className="h-1.5 w-1/2 rounded-full bg-primary" />
      </div>
      <div className="flex size-full items-center justify-center border-s">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
