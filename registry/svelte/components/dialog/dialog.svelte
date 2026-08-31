<script lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/svelte/dialog";
import { setContext, type ComponentProps } from "svelte";
import {
  dialogPresentationKey,
  type DialogPresentationContext,
} from "./dialog-context";

type Props = ComponentProps<typeof ArkDialog.Root>;
let {
  children,
  lazyMount = true,
  modal = true,
  open = $bindable(),
  unmountOnExit = true,
  ...rest
}: Props = $props();

setContext<DialogPresentationContext>(dialogPresentationKey, {
  get modal() {
    return modal;
  },
});
</script>

<ArkDialog.Root bind:open {...rest} {lazyMount} {modal} {unmountOnExit}>
  {@render children?.()}
</ArkDialog.Root>
