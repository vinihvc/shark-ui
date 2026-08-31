<script setup lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();
const forwardedAttrs = computed(() => {
  const { class: _className, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <ArkDialog.Positioner
    v-bind="forwardedAttrs"
    :class="cn(
      'fixed inset-0 z-50',
      'h-svh w-screen',
      'grid grid-rows-[1fr_auto_3fr] justify-items-center',
      'p-4',
      attrs.class as string | undefined,
    )"
    data-slot="dialog-positioner"
  ><slot /></ArkDialog.Positioner>
</template>
