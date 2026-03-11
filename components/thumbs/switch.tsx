import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const SwitchThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex h-6 w-10 items-center rounded-full border bg-primary shadow-md/5">
      <div className="size-4.5 translate-x-full rounded-full border bg-background" />
    </div>
  </BlockThumbCard>
);
