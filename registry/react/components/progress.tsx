import { Progress as ArkProgress } from "@ark-ui/react/progress";
import type React from "react";
import { cn } from "@/lib/utils";

export const Progress = (
  props: React.ComponentProps<typeof ArkProgress.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Root className={cn("w-full", className)} {...rest}>
      <ArkProgress.Track
        className={cn(
          "h-2 w-full overflow-hidden rounded-full bg-primary/20",
          className
        )}
      >
        <ArkProgress.Range
          className={cn(
            "h-full bg-primary transition-all duration-300 ease-out"
          )}
        />
      </ArkProgress.Track>
    </ArkProgress.Root>
  );
};
