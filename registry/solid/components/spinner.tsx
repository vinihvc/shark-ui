import { Loader2Icon } from "lucide-solid";
import type { ComponentProps } from "solid-js";
import { cn } from "@/lib/utils";

export const Spinner = (props: ComponentProps<"svg">) => {
  const { "aria-label": ariaLabel, className, ...rest } = props;

  return (
    <Loader2Icon
      aria-label={ariaLabel ?? "Loading"}
      class={cn("size-4 animate-spin", className)}
      data-slot="spinner"
      role="status"
      {...rest}
    />
  );
};
