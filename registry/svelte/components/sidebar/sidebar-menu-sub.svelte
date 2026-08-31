<script lang="ts">
import type { ComponentProps } from "svelte";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "element" | "sidebar" | "slot"
>;
let props: Props = $props();
</script>
<SidebarPart {...props} baseClass="mx-3.5 flex min-w-0 flex-col gap-1 border-sidebar-border border-s px-2.5 py-0.5 ltr:translate-x-px rtl:-translate-x-px group-data-[collapsible=icon]:hidden" element="ul" sidebar="menu-sub" slot="sidebar-menu-sub" />
