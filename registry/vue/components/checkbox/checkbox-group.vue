<script setup lang="ts">
import { Checkbox as ArkCheckbox } from "@ark-ui/vue/checkbox";
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
  <ArkCheckbox.Group
    v-bind="forwardedAttrs"
    :class="cn('flex flex-col gap-2', attrs.class as string | undefined)"
    data-slot="checkbox-group"
  >
    <slot />
  </ArkCheckbox.Group>
</template>
