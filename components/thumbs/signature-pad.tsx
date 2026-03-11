import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SignaturePadThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="relative flex h-24 w-full flex-col rounded-lg border bg-muted shadow-md/5">
      <div className="absolute inset-e-2 top-2 flex size-4 items-center justify-center rounded-xl border bg-muted-foreground/16" />

      <div className="absolute inset-x-4 bottom-4 border-muted-foreground/16 border-b-2" />
    </div>
  </BlockThumbCard>
);
