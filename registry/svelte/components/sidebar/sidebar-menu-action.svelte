<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../_shark/button.contract";
type Props = Omit<HTMLButtonAttributes, "children"> & {
  children?: Snippet;
  showOnHover?: boolean;
};
let {
  children,
  class: className,
  showOnHover = false,
  type = "button",
  ...rest
}: Props = $props();
</script>
<button {...rest} class={cn(buttonVariants({ clickEffect: false, size: "icon-xs", variant: "ghost" }), "absolute inset-e-1 top-1.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden", !showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 md:opacity-0", className)} data-sidebar="menu-action" data-slot="sidebar-menu-action" {type}>
  {@render children?.()}
</button>
