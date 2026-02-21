import { CheckIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const EditableThumb = ({
  description = "",
  title = "Editable",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center gap-2">
      <div className="flex h-8 flex-1 items-center rounded-lg border bg-muted px-3 shadow-md/5">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted shadow-md/5">
        <span aria-hidden className="text-muted-foreground/64">
          <CheckIcon className="size-3" />
        </span>
      </div>
    </div>
  </BlockThumbCard>
);
