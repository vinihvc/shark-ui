import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ImageCropperThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="h-24 w-full rounded-lg border bg-muted p-5 shadow-md/5">
      <div className="relative size-full rounded-md border-2 border-muted-foreground/16 border-dashed">
        <div className="absolute -top-3 -right-3 size-2.5 rounded-xs border-2 border-muted-foreground/16 bg-muted" />
        <div className="absolute -bottom-3 -left-3 size-2.5 rounded-xs border-2 border-muted-foreground/16 bg-muted" />
        <div className="absolute -top-3 -left-3 size-2.5 rounded-xs border-2 border-muted-foreground/16 bg-muted" />
        <div className="absolute -right-3 -bottom-3 size-2.5 rounded-xs border-2 border-muted-foreground/16 bg-muted" />
      </div>
    </div>
  </BlockThumbCard>
);
