import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TabsThumb = ({ description = "", title = "Tabs" }: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-2 rounded-lg border bg-muted shadow-md/5">
      <div className="flex gap-0.5 border-border border-b px-2 pb-1">
        <div className="rounded-md bg-primary px-2 py-1.5">
          <div className="h-2 w-8 rounded-full bg-muted-foreground/40" />
        </div>
        <div className="px-2 py-1.5">
          <div className="h-2 w-6 rounded-full bg-muted-foreground/16" />
        </div>
        <div className="px-2 py-1.5">
          <div className="h-2 w-7 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-3">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-4/5 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
