<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import { getContext, type ComponentProps } from "svelte";
import { cn } from "@/lib/utils";
import { dialogOverlayVariants } from "../_shark/dialog.contract";
import {
  dialogPresentationKey,
  type DialogPresentationContext,
} from "./dialog-context";

type Props = ComponentProps<typeof ArkDialog.Backdrop> & { class?: string };
let { class: className, ...rest }: Props = $props();
const presentation = getContext<DialogPresentationContext>(
  dialogPresentationKey
);
</script>

{#if presentation.modal}
  <ArkDialog.Backdrop {...rest} class={cn(dialogOverlayVariants(), className)} data-slot="dialog-overlay" />
{/if}
