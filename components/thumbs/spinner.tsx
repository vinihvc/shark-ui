import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SpinnerThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="size-8 rounded-full border-3 border-muted-foreground/24 border-r-primary" />
    </div>
  </BlockThumbCard>
);
