import { StarIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const RatingGroupThumb = ({
  description = "",
  title = "Rating Group",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex justify-center gap-1">
      <StarIcon className="size-6 fill-current text-muted-foreground" />
      <StarIcon className="size-6 fill-current text-muted-foreground" />
      <StarIcon className="size-6 fill-current text-muted-foreground" />
      <StarIcon className="size-6 text-muted-foreground/32" />
      <StarIcon className="size-6 text-muted-foreground/32" />
    </div>
  </BlockThumbCard>
);
