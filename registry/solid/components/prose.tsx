import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";
import { cn } from "@/lib/utils";

export const Prose = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("prose mx-auto max-w-[65ch]", className)}
      data-slot="prose"
      {...rest}
    />
  );
};
