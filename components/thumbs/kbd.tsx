import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const KbdThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex justify-center gap-1.5">
      <div className="flex size-12 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <span
          aria-hidden
          className="font-medium text-base text-muted-foreground"
        >
          ⌘
        </span>
      </div>
      <div className="flex size-12 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <span
          aria-hidden
          className="font-medium text-base text-muted-foreground"
        >
          K
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
