import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

interface AspectRatioProps extends React.ComponentProps<typeof ark.div> {}

export const AspectRatio = (props: AspectRatioProps) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "[--ratio:1]",
        "relative",
        "w-full",
        "aspect-(--ratio)",
        className
      )}
      data-slot="aspect-ratio"
      {...rest}
    />
  );
};
