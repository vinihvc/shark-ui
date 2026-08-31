<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";

defineOptions({ inheritAttrs: false });
interface DialogBodyProps {
  scrollFade?: boolean;
}
const props = withDefaults(defineProps<DialogBodyProps>(), {
  scrollFade: false,
});
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
      'min-h-0 flex-1 overflow-y-auto',
      props.scrollFade && '[mask-image:linear-gradient(to_bottom,transparent,black_1rem,black_calc(100%-1rem),transparent)]',
      'p-(--space)',
      'in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-0',
      'in-[[data-slot=dialog-content]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1',
      attrs.class as string | undefined,
    )"
    data-slot="dialog-body"
  ><slot /></div>
</template>
