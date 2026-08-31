<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";
import DialogDescription from "./dialog-description.vue";
import DialogTitle from "./dialog-title.vue";

defineOptions({ inheritAttrs: false });
interface DialogHeaderProps {
  description?: string;
  title?: string;
}
defineProps<DialogHeaderProps>();
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
      'p-(--space)',
      'flex flex-col gap-2',
      'in-[[data-slot=dialog-content]:has([data-slot=dialog-body])]:pb-3',
      attrs.class as string | undefined,
    )"
    data-slot="dialog-header"
  >
    <DialogTitle v-if="title">{{ title }}</DialogTitle>
    <DialogDescription v-if="description">{{ description }}</DialogDescription>
    <slot v-if="!title" />
  </div>
</template>
