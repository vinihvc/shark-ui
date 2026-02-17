import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SignaturePadThumb = ({
  description = "",
  title = "Signature Pad",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="relative flex h-24 w-full flex-col rounded-lg border bg-muted shadow-md/5">
      <div className="absolute top-2 right-2 flex size-4 items-center justify-center rounded-full border bg-muted-foreground/16" />

      <div className="absolute right-4 bottom-4 left-4 border-b-2 border-dashed" />
    </div>
  </BlockThumbCard>
);
