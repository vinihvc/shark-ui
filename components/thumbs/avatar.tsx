import { UserIcon } from "lucide-react";
import { BlockThumbCard, type BlockThumbCardProps } from "./block-card";

export const AvatarThumb = (props: BlockThumbCardProps) => (
  <BlockThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="relative flex size-14 items-center justify-center rounded-full border bg-muted text-muted-foreground shadow-md/5">
        <div className="absolute inset-1 rounded-full border bg-muted-foreground/8" />
        <UserIcon className="size-6 text-muted-foreground/64" />
      </div>
    </div>
  </BlockThumbCard>
);
