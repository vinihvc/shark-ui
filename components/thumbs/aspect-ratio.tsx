import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const AspectRatioThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex aspect-video h-auto w-32 items-center justify-center rounded-lg border bg-muted shadow-md/5">
      <span className="select-none text-muted-foreground text-xs">16:9</span>
    </div>
  </BlockThumbCard>
);
