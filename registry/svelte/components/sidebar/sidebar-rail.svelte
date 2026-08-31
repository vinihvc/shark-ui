<script lang="ts">
import type { HTMLButtonAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

let { class: className, onclick, ...rest }: HTMLButtonAttributes = $props();
const sidebar = useSidebar();
</script>

<button
  {...rest}
  aria-label="Toggle Sidebar"
  class={cn("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:inset-s-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex group-data-[placement=left]:-inset-e-4 group-data-[placement=right]:inset-s-0 motion-reduce:transition-none!", className)}
  data-sidebar="rail"
  data-slot="sidebar-rail"
  onclick={(event) => { onclick?.(event); sidebar.toggleSidebar(); }}
  tabindex={-1}
  title="Toggle Sidebar"
  type="button"
></button>
