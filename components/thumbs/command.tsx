import { SearchIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const CommandThumb = ({
  description = "",
  title = "Command",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="rounded-lg border bg-muted shadow-md/5">
      <div className="flex items-center gap-2 border-b p-3">
        <SearchIcon aria-hidden className="size-3 shrink-0 opacity-16" />
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-1.5 border-border border-b p-3">
        <div className="flex w-full justify-between gap-10">
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
          <div className="h-2 w-6 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 p-3">
        <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-2 w-6 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </BlockThumbCard>
);
