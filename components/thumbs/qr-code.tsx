import { QrCodeIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const QrCodeThumb = ({
  description = "",
  title = "QR Code",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex size-20 justify-center rounded-lg border bg-muted p-2 shadow-md/5">
        <QrCodeIcon className="size-16 stroke-[1.5] text-muted-foreground/64" />
      </div>
      <div className="h-1.5 w-1/4 rounded-lg bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
