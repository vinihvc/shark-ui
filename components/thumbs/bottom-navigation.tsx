import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const BottomNavigationThumb = ({
  description = "",
  title = "Bottom Navigation",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-52 flex-col gap-4">
      <div className="flex min-h-16 items-center justify-around rounded-lg border-border border-t bg-background p-2">
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex size-6 items-center justify-center rounded-full bg-primary">
            <div className="h-1.5 w-3 rounded-full bg-primary-foreground" />
          </div>
          <div className="h-1 w-6 rounded-full bg-primary" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="h-6 w-6 rounded-full bg-muted-foreground/16" />
          <div className="h-1 w-4 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <div className="h-6 w-6 rounded-full bg-muted-foreground/16" />
          <div className="h-1 w-4 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
