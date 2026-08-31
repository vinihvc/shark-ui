<script lang="ts">
import type { ComponentProps } from "svelte";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "sidebar" | "slot"
>;
let props: Props = $props();
</script>
<SidebarPart {...props} baseClass="w-full text-sm" sidebar="group-content" slot="sidebar-group-content" />
