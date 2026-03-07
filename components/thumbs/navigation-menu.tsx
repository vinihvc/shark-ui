import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const NavigationMenuThumb = ({
  description = "",
  title = "Navigation Menu",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-52 flex-col gap-3">
      <div className="flex items-center gap-2 rounded-lg border bg-muted p-1.5 shadow-md/5">
        <div className="h-2 w-12 rounded bg-primary/40" />
        <div className="h-2 w-10 rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col rounded-lg border bg-popover p-2 shadow-md/5">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-[80%] rounded-full bg-muted-foreground/8" />
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </BlockThumbCard>
);
