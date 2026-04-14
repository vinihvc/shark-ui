import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

interface AspectRatioProps extends ComponentProps<typeof ark.div> {}

export const AspectRatio = (props: AspectRatioProps) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
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
