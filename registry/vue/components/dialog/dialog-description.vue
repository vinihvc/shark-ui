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
  <ArkDialog.Description v-bind="forwardedAttrs" :class="cn('text-muted-foreground text-sm', attrs.class as string | undefined)" data-slot="dialog-description"><slot /></ArkDialog.Description>
</template>
