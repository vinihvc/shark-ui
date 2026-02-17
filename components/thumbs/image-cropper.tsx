import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const ImageCropperThumb = ({
  description = "",
  title = "Image Cropper",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="h-24 w-full rounded-lg border bg-muted p-4 shadow-md/5">
      <div className="relative size-full rounded-md border-2 border-primary/16 border-dashed">
        <div className="absolute -top-1 -right-1 size-2.5 rounded-xs border-2 border-primary/16 bg-background" />
        <div className="absolute -bottom-1 -left-1 size-2.5 rounded-xs border-2 border-primary/16 bg-background" />
        <div className="absolute -top-1 -left-1 size-2.5 rounded-xs border-2 border-primary/16 bg-background" />
        <div className="absolute -right-1 -bottom-1 size-2.5 rounded-xs border-2 border-primary/16 bg-background" />
      </div>
    </div>
  </BlockThumbCard>
);
