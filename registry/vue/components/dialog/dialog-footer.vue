<script setup lang="ts">
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
  <div
    v-bind="forwardedAttrs"
    :class="cn(
      'shrink-0',
      'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
      'sm:rounded-b-[calc(var(--radius-2xl)-1px)]',
      'px-(--space) py-4',
      'bg-muted/48',
      'border-t',
      attrs.class as string | undefined,
    )"
    data-slot="dialog-footer"
  ><slot /></div>
</template>
