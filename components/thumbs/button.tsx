import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ButtonThumb = ({
  description = "",
  title = "Button",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-24 items-center justify-center gap-2 rounded-lg border bg-primary p-3 shadow-md/5">
      <div className="h-2 w-3/4 rounded-full bg-primary-foreground" />
    </div>
  </BlockThumbCard>
);
