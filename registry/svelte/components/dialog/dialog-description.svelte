<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof ArkDialog.Description> & { class?: string };
let { children, class: className, ...rest }: Props = $props();
</script>

<ArkDialog.Description {...rest} class={cn('text-muted-foreground text-sm', className)} data-slot="dialog-description">{@render children?.()}</ArkDialog.Description>
