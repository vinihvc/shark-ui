import { StarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const RatingGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex justify-center gap-1">
      <StarIcon className="size-6 fill-current text-primary" />
      <StarIcon className="size-6 fill-current text-primary" />
      <StarIcon className="size-6 fill-current text-primary" />
      <StarIcon className="size-6 text-primary" />
      <StarIcon className="size-6 text-primary" />
    </div>
  </ThumbCard>
);
