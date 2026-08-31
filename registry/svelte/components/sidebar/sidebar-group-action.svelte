<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../_shark/button.contract";
type Props = Omit<HTMLButtonAttributes, "children"> & { children?: Snippet };
let { children, class: className, type = "button", ...rest }: Props = $props();
</script>
<button {...rest} class={cn(buttonVariants({ clickEffect: false, size: "icon-xs", variant: "ghost" }), "absolute inset-e-3 top-3.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden", className)} data-sidebar="group-action" data-slot="sidebar-group-action" {type}>
  {@render children?.()}
</button>
