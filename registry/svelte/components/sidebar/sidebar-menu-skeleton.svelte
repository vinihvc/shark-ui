<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
type Props = HTMLAttributes<HTMLDivElement> & { showIcon?: boolean };
let { class: className, showIcon = false, ...rest }: Props = $props();
const width = `${Math.floor(Math.random() * 40) + 50}%`;
</script>
<div {...rest} class={cn("flex h-8 items-center gap-2 rounded-md px-2", className)} data-sidebar="menu-skeleton" data-slot="sidebar-menu-skeleton">
  {#if showIcon}<div class="size-4 animate-pulse rounded-md bg-muted" data-sidebar="menu-skeleton-icon"></div>{/if}
  <div class="h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded-md bg-muted" data-sidebar="menu-skeleton-text" style:--skeleton-width={width}></div>
</div>
