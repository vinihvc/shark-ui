import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const ButtonThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex h-8 w-24 items-center justify-center gap-2 rounded-lg border bg-primary shadow-md/5">
      <div className="h-1 w-1/2 rounded-full bg-primary-foreground" />
    </div>
  </BlockThumbCard>
);
