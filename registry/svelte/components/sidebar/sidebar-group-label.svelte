<script lang="ts">
import type { ComponentProps } from "svelte";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "sidebar" | "slot"
>;
let props: Props = $props();
</script>
<SidebarPart {...props} baseClass="flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs transition-[margin,opacity] duration-200 ease-linear outline-hidden ring-sidebar-ring focus-visible:ring-2 [&_svg]:size-4 [&_svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 motion-reduce:transition-none!" sidebar="group-label" slot="sidebar-group-label" />
