import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const AngleSliderThumb = ({
  description = "",
  title = "Angle Slider",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center justify-center">
      <div className="relative flex size-20 flex-col items-center gap-2 rounded-full bg-muted shadow-md/5">
        <div className="absolute inset-0 rounded-full border-8 border-muted-foreground/16" />
        <div
          className="absolute inset-0 rounded-full border-8 border-primary"
          style={{
            clipPath:
              "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%)",
          }}
        />
        <div className="absolute top-12 left-0 size-4 rounded-full bg-primary ring-4 ring-muted" />
      </div>
    </div>
  </BlockThumbCard>
);
