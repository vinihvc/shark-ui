import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const TableThumb = ({
  description = "",
  title = "Table",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col gap-2 rounded-xl border bg-muted p-3 shadow-md/5">
      <div className="rounded-lg border bg-card p-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="size-2.5 shrink-0 rounded-sm bg-muted-foreground/24" />
            <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-6 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-10 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-7 rounded-full bg-muted-foreground/16" />
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2.5 shrink-0 rounded-sm bg-muted-foreground/24" />
            <div className="h-2 w-7 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-9 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-5 rounded-full bg-muted-foreground/16" />
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2.5 shrink-0 rounded-sm bg-muted-foreground/24" />
            <div className="h-2 w-9 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-5 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-7 rounded-full bg-muted-foreground/16" />
            <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
          </div>
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
