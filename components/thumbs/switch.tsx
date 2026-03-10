import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SwitchThumb = ({
  description = "",
  title = "Switch",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex h-6 w-10 items-center rounded-full border bg-primary shadow-md/5">
      <div className="size-4.5 translate-x-full rounded-full border bg-background" />
    </div>
  </BlockThumbCard>
);
