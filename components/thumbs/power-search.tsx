import { XIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export interface PowerSearchThumbProps extends ThumbCardProps {}

export const PowerSearchThumb = ({ ...props }: PowerSearchThumbProps) => (
  <ThumbCard {...props}>
    <div className="flex min-h-8 w-full max-w-52 flex-wrap items-center gap-1 rounded-lg border border-input bg-muted p-1 px-2 shadow-md/5">
      <div className="flex h-4.5 items-center gap-1 rounded-md border border-border bg-secondary px-1.5">
        <div className="h-1.5 w-4 rounded-lg bg-muted-foreground/16" />
        <XIcon aria-hidden className="size-2 text-muted-foreground/64" />
      </div>
      <div className="flex h-4.5 items-center gap-1 rounded-md border border-border bg-secondary px-1.5">
        <div className="h-1.5 w-7 rounded-lg bg-muted-foreground/16" />
      </div>
      <div className="ms-auto h-1.5 w-7 rounded-lg bg-muted-foreground/16" />
      <XIcon aria-hidden className="size-2 text-muted-foreground/64" />
    </div>
  </ThumbCard>
);
