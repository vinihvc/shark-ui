import { EllipsisIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const MenuThumb = ({ description = "", title = "Menu" }: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex w-48 flex-col items-end gap-1.5">
      <div className="flex size-8 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <EllipsisIcon className="size-4 text-muted-foreground/64" />
      </div>
      <div className="flex w-full flex-col rounded-lg border bg-muted shadow-md/5">
        <div className="flex items-center gap-2 border-b p-2">
          <div className="size-4 shrink-0 rounded-lg bg-muted-foreground/16" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="size-4 shrink-0 rounded-lg bg-muted-foreground/16" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </BlockThumbCard>
);
