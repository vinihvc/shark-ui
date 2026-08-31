<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import type { ComponentProps } from "svelte";

type Props = ComponentProps<typeof ArkDialog.CloseTrigger>;
let { children, ...rest }: Props = $props();
</script>

<ArkDialog.CloseTrigger {...rest} data-slot="dialog-close-trigger">{@render children?.()}</ArkDialog.CloseTrigger>
