<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import Button from "../button.svelte";
import { useSidebar } from "./sidebar-context";

type Props = Omit<HTMLButtonAttributes, "children"> & { children?: Snippet };
let { children, class: className, onclick, ...rest }: Props = $props();
const sidebar = useSidebar();
</script>

<Button
  {...rest}
  class={cn("size-7", className)}
  data-sidebar="trigger"
  data-slot="sidebar-trigger"
  onclick={(event) => { onclick?.(event); sidebar.toggleSidebar(); }}
  size="icon-md"
  variant="ghost"
>
  {#if children}
    {@render children()}
  {:else}
    <svg aria-hidden="true" class="rtl:rotate-180" fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="2" stroke="currentColor" stroke-width="2" width="18" x="3" y="4" />
      <path d="M9 4v16" stroke="currentColor" stroke-width="2" />
    </svg>
  {/if}
  <span class="sr-only">Toggle Sidebar</span>
</Button>
