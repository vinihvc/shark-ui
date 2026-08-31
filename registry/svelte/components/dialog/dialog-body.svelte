<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: Snippet;
  class?: string;
  scrollFade?: boolean;
};
let {
  children,
  class: className,
  scrollFade = false,
  ...rest
}: Props = $props();
</script>

<div
  {...rest}
  class={cn(
    'min-h-0 flex-1 overflow-y-auto',
    scrollFade && '[mask-image:linear-gradient(to_bottom,transparent,black_1rem,black_calc(100%-1rem),transparent)]',
    'p-(--space)',
    'in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-0',
    'in-[[data-slot=dialog-content]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1',
    className,
  )}
  data-slot="dialog-body"
>{@render children?.()}</div>
