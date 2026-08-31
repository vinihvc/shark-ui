<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  baseClass: string;
  children?: Snippet;
  element?: "a" | "div" | "li" | "main" | "ul";
  sidebar?: string;
  slot: string;
};
let {
  baseClass,
  children,
  class: className,
  element = "div",
  sidebar,
  slot,
  ...rest
}: Props = $props();
</script>

<svelte:element this={element} {...rest} class={cn(baseClass, className)} data-sidebar={sidebar} data-slot={slot}>
  {@render children?.()}
</svelte:element>
