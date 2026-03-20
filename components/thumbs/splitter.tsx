import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SplitterThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-full">
      <div className="flex-1" />
      <div className="w-2 shrink-0" />
      <div className="flex-1" />
    </div>
  </ThumbCard>
);
