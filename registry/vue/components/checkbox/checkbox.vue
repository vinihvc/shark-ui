<script setup lang="ts">
import { Checkbox as ArkCheckbox } from "@ark-ui/vue/checkbox";
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";
import { checkboxVariants } from "../_shark/checkbox.contract";
import CheckboxIndicator from "./checkbox-indicator.vue";

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();
const forwardedAttrs = computed(() => {
  const { class: _className, tabindex: _tabIndex, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <ArkCheckbox.Root
    v-bind="forwardedAttrs"
    :class="cn(checkboxVariants(), attrs.class as string | undefined)"
    data-slot="checkbox"
    role="checkbox"
  >
    <ArkCheckbox.Control data-slot="checkbox-control">
      <CheckboxIndicator>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path d="m5 12 4 4 10-10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
        </svg>
      </CheckboxIndicator>
      <CheckboxIndicator indeterminate>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14" stroke="currentColor" stroke-linecap="round" stroke-width="3" />
        </svg>
      </CheckboxIndicator>
    </ArkCheckbox.Control>
    <slot />
    <ArkCheckbox.HiddenInput :tabindex="attrs.tabindex as number | undefined" />
  </ArkCheckbox.Root>
</template>
