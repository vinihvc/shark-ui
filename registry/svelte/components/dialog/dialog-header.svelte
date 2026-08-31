<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import DialogDescription from "./dialog-description.svelte";
import DialogTitle from "./dialog-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: Snippet;
  class?: string;
  description?: string;
  title?: string;
};
let {
  children,
  class: className,
  description,
  title,
  ...rest
}: Props = $props();
</script>

<div
  {...rest}
  class={cn(
    'shrink-0',
    'p-(--space)',
    'flex flex-col gap-2',
    'in-[[data-slot=dialog-content]:has([data-slot=dialog-body])]:pb-3',
    className,
  )}
  data-slot="dialog-header"
>
  {#if title}<DialogTitle>{title}</DialogTitle>{/if}
  {#if description}<DialogDescription>{description}</DialogDescription>{/if}
  {#if !title}{@render children?.()}{/if}
</div>
