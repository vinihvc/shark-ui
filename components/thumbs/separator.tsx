import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SeparatorThumb = ({
  description = "",
  title = "Separator",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-56 flex-col gap-2 p-2">
      <div className="flex flex-col gap-2">
        <div className="h-2 w-2/3 shrink-0 rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full shrink-0 rounded-full bg-muted-foreground/6" />
      </div>

      <div className="h-px w-full shrink-0 bg-border" />

      <div className="flex h-4 items-center gap-2">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/6" />
        <div className="h-full w-px shrink-0 bg-border" />
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/6" />
      </div>
    </div>
  </BlockThumbCard>
);
