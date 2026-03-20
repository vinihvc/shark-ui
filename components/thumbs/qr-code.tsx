import { QrCodeIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QrCodeThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex size-20 justify-center rounded-lg border border-input bg-muted p-2 shadow-md/5">
        <QrCodeIcon className="size-16 stroke-[1.5] text-muted-foreground/64" />
      </div>
      <div className="h-1.5 w-1/4 rounded-lg bg-muted-foreground/16" />
    </div>
  </ThumbCard>
);
