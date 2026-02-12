import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const SheetThumb = ({
  description = "",
  title = "Sheet",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-full rounded-xl border bg-muted p-3 shadow-md/5">
      {/* Main content placeholder */}
      <div
        aria-hidden
        className="flex flex-1 rounded-lg border border-muted-foreground/30 border-dashed bg-card"
      />
      {/* Sheet flyout panel */}
      <div className="flex w-14 flex-col gap-2 rounded-l-xl border border-l-0 bg-card p-2">
        <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/16" />
        <div className="mt-auto flex justify-center">
          <div className="h-4 w-10 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
