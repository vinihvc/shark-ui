import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SuggestionThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-wrap justify-center gap-2">
      <div className="h-7 w-24 rounded-full border" />
      <div className="h-7 w-28 rounded-full border" />
      <div className="h-7 w-20 rounded-full border" />
    </div>
  </ThumbCard>
);
