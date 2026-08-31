<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../_shark/button.contract";
type Props = Omit<HTMLAnchorAttributes, "children"> &
  VariantProps<typeof buttonVariants> & {
    children?: Snippet;
    isActive?: boolean;
  };
let {
  children,
  class: className,
  isActive = false,
  size = "md",
  ...rest
}: Props = $props();
</script>
<a {...rest} class={cn(buttonVariants({ clickEffect: false, size, variant: "ghost" }), "w-full min-w-0 justify-start overflow-hidden px-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground [&>span:last-child]:truncate", className)} data-active={isActive} data-sidebar="menu-sub-button" data-size={size} data-slot="sidebar-menu-sub-button">
  {@render children?.()}
</a>
