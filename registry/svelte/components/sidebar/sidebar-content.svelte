<script lang="ts">
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";
import SidebarPart from "./sidebar-part.svelte";
type Props = Omit<
  ComponentProps<typeof SidebarPart>,
  "baseClass" | "sidebar" | "slot"
> & { scrollFade?: boolean };
let { class: className, scrollFade = false, ...rest }: Props = $props();
</script>
<SidebarPart {...rest} baseClass={cn("min-h-0 flex flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", scrollFade && "[mask-image:linear-gradient(to_bottom,transparent,black_3rem,black_calc(100%-3rem),transparent)]", className)} sidebar="content" slot="sidebar-content" />
