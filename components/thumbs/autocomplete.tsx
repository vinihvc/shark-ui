import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const AutocompleteThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="flex h-8 items-center rounded-lg border bg-muted px-4 shadow-md/5">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-4 rounded-lg border bg-muted p-3 shadow-md/5">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
