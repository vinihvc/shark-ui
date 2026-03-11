import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SliderThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-56 items-center gap-1">
      <div className="h-3 w-1/3 rounded-full bg-primary" />
      <div className="size-4 shrink-0 rounded-full bg-primary" />
      <div className="h-3 w-full rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
