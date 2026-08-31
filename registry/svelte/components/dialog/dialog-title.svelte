<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof ArkDialog.Title> & { class?: string };
let { children, class: className, ...rest }: Props = $props();
</script>

<ArkDialog.Title {...rest} class={cn('font-heading font-semibold text-lg leading-none', className)} data-slot="dialog-title">{@render children?.()}</ArkDialog.Title>
