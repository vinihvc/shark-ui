import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SplitterThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex h-full">
      <div className="flex-1" />
      <div className="w-2 shrink-0" />
      <div className="flex-1" />
    </div>
  </BlockThumbCard>
);
