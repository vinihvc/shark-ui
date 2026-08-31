<script lang="ts">
import type { ComponentProps } from "svelte";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "element" | "sidebar" | "slot"
>;
let props: Props = $props();
</script>
<SidebarPart {...props} baseClass="flex w-full min-w-0 flex-col gap-0" element="ul" sidebar="menu" slot="sidebar-menu" />
