<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

type Props = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  children?: Snippet;
  collapsible?: "icon" | "none" | "offcanvas";
  placement?: "left" | "right";
  variant?: "floating" | "inset" | "sidebar";
};

let {
  children,
  class: className,
  collapsible = "offcanvas",
  placement = "left",
  variant = "sidebar",
  ...rest
}: Props = $props();
const sidebar = useSidebar();
</script>

{#if collapsible === "none"}
  <aside {...rest} class={cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className)} data-slot="sidebar">
    {@render children?.()}
  </aside>
{:else if sidebar.isMobile}
  {#if sidebar.openMobile}
    <button aria-label="Close sidebar" class="fixed inset-0 z-40 bg-black/32" onclick={() => sidebar.setOpenMobile(false)} type="button"></button>
    <aside
      {...rest}
      aria-modal="true"
      class={cn("fixed inset-y-0 z-50 flex w-[18rem] flex-col bg-sidebar text-sidebar-foreground", placement === "left" ? "inset-s-0" : "inset-e-0", className)}
      data-mobile="true"
      data-sidebar="sidebar"
      data-slot="sidebar"
      role="dialog"
    >
      {@render children?.()}
    </aside>
  {/if}
{:else}
  <aside
    class="group peer hidden text-sidebar-foreground md:block"
    data-collapsible={sidebar.state === "collapsed" ? collapsible : ""}
    data-placement={placement}
    data-slot="sidebar"
    data-state={sidebar.state}
    data-variant={variant}
  >
    <div
      class={cn(
        "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[placement=right]:rotate-180",
        variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        "motion-reduce:transition-none!",
      )}
      data-slot="sidebar-gap"
    ></div>
    <div
      {...rest}
      class={cn(
        "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[inset-inline-start,inset-inline-end,width] duration-200 ease-linear md:flex",
        placement === "left" ? "inset-s-0 group-data-[collapsible=offcanvas]:-inset-s-(--sidebar-width)" : "inset-e-0 group-data-[collapsible=offcanvas]:-inset-e-(--sidebar-width)",
        variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[placement=right]:border-s group-data-[placement=left]:border-e",
        "motion-reduce:transition-none!",
        className,
      )}
      data-slot="sidebar-container"
    >
      <div class="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm" data-sidebar="sidebar" data-slot="sidebar-inner">
        {@render children?.()}
      </div>
    </div>
  </aside>
{/if}
