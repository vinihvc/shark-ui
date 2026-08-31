<script setup lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";
import { Portal } from "@ark-ui/vue/portal";
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../_shark/button.contract";
import { dialogContentVariants } from "../_shark/dialog.contract";
import DialogOverlay from "./dialog-overlay.vue";
import DialogPositioner from "./dialog-positioner.vue";

defineOptions({ inheritAttrs: false });

interface DialogContentProps {
  bottomStickOnMobile?: boolean;
  showCloseButton?: boolean;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "fullscreen";
}

const props = withDefaults(defineProps<DialogContentProps>(), {
  bottomStickOnMobile: true,
  showCloseButton: true,
  size: "md",
});
const attrs = useAttrs();
const forwardedAttrs = computed(() => {
  const { class: _className, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <Portal>
    <DialogOverlay />
    <DialogPositioner :class="props.bottomStickOnMobile && 'max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12'">
      <ArkDialog.Content
        v-bind="forwardedAttrs"
        :class="cn(dialogContentVariants({
          bottomStickOnMobile: props.bottomStickOnMobile,
          size: props.size,
        }), attrs.class as string | undefined)"
        data-slot="dialog-content"
      >
        <slot />
        <ArkDialog.CloseTrigger
          v-if="props.showCloseButton"
          aria-label="Close"
          :class="cn(
            buttonVariants({ size: 'icon-sm', variant: 'ghost' }),
            'absolute inset-e-2 top-2 opacity-64 hover:opacity-100',
          )"
          data-slot="dialog-close-trigger"
        >
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
          </svg>
        </ArkDialog.CloseTrigger>
      </ArkDialog.Content>
    </DialogPositioner>
  </Portal>
</template>
