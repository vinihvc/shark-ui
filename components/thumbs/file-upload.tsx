import { CloudUploadIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const FileUploadThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex w-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-muted p-6 shadow-md/5">
      <div className="flex size-8 items-center justify-center gap-2 rounded-full border border-dashed">
        <CloudUploadIcon className="size-3 text-muted-foreground" />
      </div>
      <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/16" />
    </div>
  </BlockThumbCard>
);
