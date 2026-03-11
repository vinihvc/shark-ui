import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const BadgeThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-24 items-center gap-2 rounded-lg border bg-muted px-3 py-2 shadow-md/5">
      <div className="size-1.5 shrink-0 rounded-full bg-muted-foreground/16" />
      <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
