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
  <ArkCheckbox.Indicator
    v-bind="forwardedAttrs"
    :class="cn(
      'absolute -inset-px',
      'flex items-center justify-center',
      'rounded-sm',
      'text-primary-foreground',
      'data-[state=checked]:bg-primary',
      'data-[state=unchecked]:hidden',
      'data-[state=indeterminate]:text-foreground',
      attrs.class as string | undefined,
    )"
    data-slot="checkbox-indicator"
  >
    <slot />
  </ArkCheckbox.Indicator>
</template>
