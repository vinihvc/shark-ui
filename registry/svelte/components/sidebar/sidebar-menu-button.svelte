<script lang="ts">
import type { ButtonProps } from "../button.svelte";
import { cn } from "@/lib/utils";
import Button from "../button.svelte";
type Props = ButtonProps & { isActive?: boolean; tooltip?: string };
let {
  class: className,
  isActive = false,
  size = "md",
  tooltip,
  variant = "ghost",
  ...rest
}: Props = $props();
</script>
<Button
  {...rest}
  class={cn("peer/menu-button group/menu-button w-full justify-start gap-2 overflow-hidden p-2 transition-[width,height,padding] data-[size=sm]:text-xs data-[size=lg]:h-12 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground [&>span:last-child]:truncate", className)}
  clickEffect={false}
  data-active={isActive}
  data-sidebar="menu-button"
  data-size={size}
  data-slot="sidebar-menu-button"
  {size}
  title={tooltip}
  {variant}
/>
