import {
  Highlight as ArkHighlight,
  useHighlight as useArkHighlight,
} from "@ark-ui/solid/highlight";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useHighlight = useArkHighlight;

export const Highlight = (props: ComponentProps<typeof ArkHighlight>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkHighlight
      class={cn(
        "px-1",
        "bg-primary/20",
        "text-primary",
        "rounded-md",
        "box-decoration-clone",
        className
      )}
      data-slot="highlight"
      {...rest}
    />
  );
};
