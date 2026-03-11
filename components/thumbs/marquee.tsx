import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const MarqueeThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="relative isolate flex w-64 gap-2 rounded-lg border bg-muted p-2 shadow-md/5">
      <div className="absolute inset-y-0 left-0 z-10 w-1/2 rounded-l-lg bg-linear-to-r from-muted to-transparent" />
      <div className="h-8 w-full rounded-lg border bg-muted-foreground/16" />
      <div className="h-8 w-full rounded-lg border bg-muted-foreground/16" />
      <div className="h-8 w-full rounded-lg border bg-muted-foreground/16" />
      <div className="h-8 w-full rounded-lg border bg-muted-foreground/16" />
      <div className="absolute inset-y-0 right-0 z-10 w-1/2 rounded-r-lg bg-linear-to-l from-muted to-transparent" />
    </div>
  </BlockThumbCard>
);
