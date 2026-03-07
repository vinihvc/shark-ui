import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const DrawerThumb = ({
  description = "",
  title = "Drawer",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex h-28 w-full items-stretch gap-2 rounded-lg">
      <div className="flex w-full items-center justify-center rounded-lg border border-dashed bg-muted shadow-md/5" />

      <div className="flex w-1/3 min-w-14 flex-col gap-2 rounded-lg border bg-muted p-3 shadow-md/5">
        <div className="flex justify-center pt-1">
          <div className="h-1 w-6 rounded-full bg-muted-foreground/24" />
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="h-1.5 w-3/4 rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/8" />
        </div>
        <div className="flex flex-1" />
        <div className="flex justify-end">
          <div className="h-2.5 w-1/2 rounded-lg bg-primary" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
