<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof ArkDialog.Positioner> & { class?: string };
let { class: className, children, ...rest }: Props = $props();
</script>

<ArkDialog.Positioner
  {...rest}
  class={cn(
    'fixed inset-0 z-50',
    'h-svh w-screen',
    'grid grid-rows-[1fr_auto_3fr] justify-items-center',
    'p-4',
    className,
  )}
  data-slot="dialog-positioner"
>
  {@render children?.()}
</ArkDialog.Positioner>
