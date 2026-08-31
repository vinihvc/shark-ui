<script lang="ts">
import type { ComponentProps } from "svelte";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "sidebar" | "slot"
>;
let props: Props = $props();
</script>
<SidebarPart {...props} baseClass="mx-2 h-px w-auto shrink-0 bg-sidebar-border" role="separator" sidebar="separator" slot="sidebar-separator" />
