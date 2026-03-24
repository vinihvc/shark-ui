import { StarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const RatingGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex justify-center gap-1">
      <StarIcon className="size-6 fill-current text-primary/64" />
      <StarIcon className="size-6 fill-current text-primary/64" />
      <StarIcon className="size-6 fill-current text-primary/64" />
      <StarIcon className="size-6 text-primary/16" />
      <StarIcon className="size-6 text-primary/16" />
    </div>
  </ThumbCard>
);
