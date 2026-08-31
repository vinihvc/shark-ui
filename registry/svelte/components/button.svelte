<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_shark/button.contract";

type AsChild = Snippet<
  [(props?: HTMLButtonAttributes) => HTMLButtonAttributes]
>;

export type ButtonProps = Omit<HTMLButtonAttributes, "class" | "children"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: AsChild;
    children?: Snippet;
    class?: string;
    clickEffect?: boolean;
    isLoading?: boolean;
  };

let {
  asChild,
  children,
  class: className,
  clickEffect = true,
  isLoading = false,
  pill = false,
  size = "md",
  type = "button",
  variant = "default",
  ...rest
}: ButtonProps = $props();
</script>

<Ark
  as="button"
  {asChild}
  {...rest}
  aria-busy={isLoading || undefined}
  aria-disabled={isLoading || undefined}
  class={cn(buttonVariants({ clickEffect, pill, size, variant }), className)}
  data-size={size}
  data-slot="button"
  data-state={isLoading ? 'loading' : 'idle'}
  {type}
>
  {#if isLoading}
    <span aria-hidden="true" class="invisible">{@render children?.()}</span>
    <span class="sr-only">{@render children?.()}</span>
    <span class="absolute inset-0 flex items-center justify-center">
      <svg aria-hidden="true" class="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" />
        <path class="opacity-75" d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-linecap="round" stroke-width="3" />
      </svg>
    </span>
  {:else}
    {@render children?.()}
  {/if}
</Ark>
