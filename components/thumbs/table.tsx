import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TableThumb = ({
  description = "",
  title = "Table",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-2 rounded-xl border bg-muted p-3 shadow-md/5">
      <div className="flex items-center gap-2 border-b pb-2">
        <div className="size-2.5 shrink-0 rounded-xs bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
      </div>
      <div className="flex items-center gap-2 border-b pb-2">
        <div className="size-2.5 shrink-0 rounded-xs bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
      </div>
      <div className="flex items-center gap-2">
        <div className="size-2.5 shrink-0 rounded-xs bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
        <div className="h-2 w-full rounded-full bg-muted-foreground/12" />
      </div>
    </div>
  </BlockThumbCard>
);
