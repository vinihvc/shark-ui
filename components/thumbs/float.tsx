import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const FloatThumb = ({
  description = "",
  title = "Float",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="relative flex h-24 w-full items-center justify-center rounded-lg border bg-muted shadow-md/5">
      <div className="h-16 w-20 rounded-md bg-muted-foreground/16" />
      <div className="absolute inset-e-2 top-2 flex size-6 items-center justify-center rounded-full bg-muted-foreground/16 font-medium text-[10px] text-muted-foreground/64">
        3
      </div>
    </div>
  </BlockThumbCard>
);
