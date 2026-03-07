import { UserIcon } from "lucide-react";
import { BlockThumbCard } from "./block-card";
import type { ThumbProps } from "./types";

export const AvatarThumb = ({
  description = "",
  title = "Avatar",
}: ThumbProps) => (
  <BlockThumbCard subtitle={description} title={title}>
    <div className="flex items-center justify-center">
      <div className="relative flex size-14 items-center justify-center rounded-full border bg-muted text-muted-foreground shadow-md/5">
        <div className="absolute inset-1 rounded-full border bg-muted-foreground/8" />
        <UserIcon className="size-6 text-muted-foreground/64" />
      </div>
    </div>
  </BlockThumbCard>
);
