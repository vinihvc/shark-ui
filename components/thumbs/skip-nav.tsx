import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SkipNavThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex flex-col gap-2 p-3">
        <div className="h-2 w-full rounded-full bg-muted-foreground/8" />
        <div className="flex items-center gap-2 border-t pt-2">
          <span className="text-muted-foreground/64 text-xs">
            Skip to content
          </span>
          <div className="h-2 w-24 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="h-12 w-full rounded-md bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
