<script lang="ts">
import type { ComponentProps } from "svelte";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "sidebar" | "slot"
>;
let props: Props = $props();
</script>
<SidebarPart {...props} baseClass="pointer-events-none absolute inset-e-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums group-data-[collapsible=icon]:hidden" sidebar="menu-badge" slot="sidebar-menu-badge" />
