<script setup lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";
import { computed, inject, useAttrs } from "vue";
import { cn } from "@/lib/utils";
import { dialogOverlayVariants } from "../_shark/dialog.contract";
import { dialogPresentationKey } from "./dialog-context";

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();
const presentation = inject(dialogPresentationKey, { modal: true });
const forwardedAttrs = computed(() => {
  const { class: _className, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <ArkDialog.Backdrop
    v-if="presentation.modal"
    v-bind="forwardedAttrs"
    :class="cn(dialogOverlayVariants(), attrs.class as string | undefined)"
    data-slot="dialog-overlay"
  />
</template>
