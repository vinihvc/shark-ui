import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const LinkOverlayThumb = ({
  description = "",
  title = "Link Overlay",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="relative flex h-20 w-full items-center justify-center p-3">
        <div className="h-full w-full rounded-md bg-muted-foreground/16" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <span
              aria-hidden="true"
              className="text-muted-foreground/64 text-xs"
            >
              +
            </span>
            <div className="h-2 w-12 rounded-full bg-muted-foreground/8" />
          </div>
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
