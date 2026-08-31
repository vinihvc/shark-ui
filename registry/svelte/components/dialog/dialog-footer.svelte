<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: Snippet;
  class?: string;
};
let { children, class: className, ...rest }: Props = $props();
</script>

<div
  {...rest}
  class={cn(
    'shrink-0',
    'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    'sm:rounded-b-[calc(var(--radius-2xl)-1px)]',
    'px-(--space) py-4',
    'bg-muted/48',
    'border-t',
    className,
  )}
  data-slot="dialog-footer"
>{@render children?.()}</div>
