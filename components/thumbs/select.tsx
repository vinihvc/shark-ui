import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SelectThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-48 items-center rounded-lg border bg-muted p-1 px-2 shadow-md/5">
      <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
      <div className="ml-auto rotate-180">
        <span aria-hidden className="text-muted-foreground/64 text-xs">
          ⌃
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
