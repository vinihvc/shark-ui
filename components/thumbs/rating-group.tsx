import { StarIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const RatingGroupThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex justify-center gap-1">
      <StarIcon className="size-6 fill-current text-muted-foreground/64" />
      <StarIcon className="size-6 fill-current text-muted-foreground/64" />
      <StarIcon className="size-6 fill-current text-muted-foreground/64" />
      <StarIcon className="size-6 text-muted-foreground/16" />
      <StarIcon className="size-6 text-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
