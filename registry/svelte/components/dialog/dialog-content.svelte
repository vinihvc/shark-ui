<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import { Portal } from "@ark-ui/svelte/portal";
import type { ComponentProps } from "svelte";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../_shark/button.contract";
import { dialogContentVariants } from "../_shark/dialog.contract";
import DialogOverlay from "./dialog-overlay.svelte";
import DialogPositioner from "./dialog-positioner.svelte";

type Props = ComponentProps<typeof ArkDialog.Content> &
  VariantProps<typeof dialogContentVariants> & {
    bottomStickOnMobile?: boolean;
    class?: string;
    showCloseButton?: boolean;
  };

let {
  bottomStickOnMobile = true,
  children,
  class: className,
  showCloseButton = true,
  size = "md",
  ...rest
}: Props = $props();
</script>

<Portal>
  <DialogOverlay />
  <DialogPositioner class={cn(bottomStickOnMobile && 'max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12')}>
    <ArkDialog.Content
      {...rest}
      class={cn(dialogContentVariants({ bottomStickOnMobile, size }), className)}
      data-slot="dialog-content"
    >
      {@render children?.()}
      {#if showCloseButton}
        <ArkDialog.CloseTrigger
          aria-label="Close"
          class={cn(
            buttonVariants({ size: 'icon-sm', variant: 'ghost' }),
            'absolute inset-e-2 top-2 opacity-64 hover:opacity-100',
          )}
          data-slot="dialog-close-trigger"
        >
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
          </svg>
        </ArkDialog.CloseTrigger>
      {/if}
    </ArkDialog.Content>
  </DialogPositioner>
</Portal>
