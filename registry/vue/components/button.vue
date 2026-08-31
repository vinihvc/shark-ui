<script setup lang="ts">
import { ark } from "@ark-ui/vue/factory";
import { computed, useAttrs } from "vue";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_shark/button.contract";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    asChild?: boolean;
    clickEffect?: boolean;
    isLoading?: boolean;
    pill?: boolean;
    size?:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "icon-xs"
      | "icon-sm"
      | "icon-md"
      | "icon-lg"
      | "icon-xl";
    type?: "button" | "reset" | "submit";
    variant?:
      | "default"
      | "destructive"
      | "ghost"
      | "link"
      | "outline"
      | "secondary";
  }>(),
  {
    clickEffect: true,
    isLoading: false,
    pill: false,
    size: "md",
    type: "button",
    variant: "default",
  }
);

const attrs = useAttrs();
const forwardedAttrs = computed(() => {
  const { class: _className, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <ark.button
    v-bind="forwardedAttrs"
    :aria-busy="props.isLoading || undefined"
    :aria-disabled="props.isLoading || undefined"
    :as-child="props.asChild"
    :class="cn(buttonVariants({
      clickEffect: props.clickEffect,
      pill: props.pill,
      size: props.size,
      variant: props.variant,
    }), attrs.class as string | undefined)"
    :data-size="props.size"
    data-slot="button"
    :data-state="props.isLoading ? 'loading' : 'idle'"
    :type="props.type"
  >
    <template v-if="props.isLoading">
      <span aria-hidden="true" class="invisible"><slot /></span>
      <span class="sr-only"><slot /></span>
      <span class="absolute inset-0 flex items-center justify-center">
        <svg
          aria-hidden="true"
          class="size-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            stroke-width="3"
          />
          <path
            class="opacity-75"
            d="M21 12a9 9 0 0 0-9-9"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="3"
          />
        </svg>
      </span>
    </template>
    <slot v-else />
  </ark.button>
</template>
