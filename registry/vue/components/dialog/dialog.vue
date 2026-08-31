<script setup lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";
import { computed, provide, useAttrs } from "vue";
import { dialogPresentationKey } from "./dialog-context";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    lazyMount?: boolean;
    modal?: boolean;
    unmountOnExit?: boolean;
  }>(),
  {
    lazyMount: true,
    modal: true,
    unmountOnExit: true,
  }
);
const attrs = useAttrs();
const rootProps = computed(() => ({ ...attrs, ...props }));
provide(dialogPresentationKey, { modal: props.modal });
</script>

<template>
  <ArkDialog.Root v-bind="rootProps">
    <slot />
  </ArkDialog.Root>
</template>
