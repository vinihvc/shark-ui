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
  <ArkDialog.Title v-bind="forwardedAttrs" :class="cn('font-heading font-semibold text-lg leading-none', attrs.class as string | undefined)" data-slot="dialog-title"><slot /></ArkDialog.Title>
</template>
