import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const LinkBox = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "relative",
        "[&_a[href]:not([data-slot=link-overlay])]:relative [&_a[href]:not([data-slot=link-overlay])]:z-1",
        className
      )}
      data-slot="link-box"
      {...rest}
    />
  );
};

export const LinkOverlay = (props: ComponentProps<typeof ark.a>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.a
      class={cn(
        "static",
        "-mx-1 -my-0.5 px-1 py-0.5",
        "rounded-md border border-transparent",
        "before:absolute before:inset-0 before:z-0 before:block before:h-full before:w-full before:cursor-inherit before:content-['']",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        className
      )}
      data-slot="link-overlay"
      {...rest}
    />
  );
};
