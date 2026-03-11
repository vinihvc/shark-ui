import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const FloatThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="relative h-16 w-16">
      <div className="size-full rounded-lg border bg-muted-foreground/16 shadow-md/5" />
      <div className="absolute -inset-e-2 -top-2 flex size-6 items-center justify-center rounded-full bg-muted-foreground ring-4 ring-background" />
    </div>
  </BlockThumbCard>
);
