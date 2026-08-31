<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import type { ComponentProps } from "svelte";

type Props = ComponentProps<typeof ArkDialog.Trigger>;
let { children, ...rest }: Props = $props();
</script>

<ArkDialog.Trigger {...rest} data-slot="dialog-trigger">{@render children?.()}</ArkDialog.Trigger>
