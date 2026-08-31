<script lang="ts">
import { Checkbox as ArkCheckbox } from "@ark-ui/svelte/checkbox";
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";
import { checkboxVariants } from "../_shark/checkbox.contract";
import CheckboxIndicator from "./checkbox-indicator.svelte";

type Props = ComponentProps<typeof ArkCheckbox.Root> & {
  class?: string;
  tabindex?: number;
};
let { class: className, children, tabindex, ...rest }: Props = $props();
</script>

<ArkCheckbox.Root {...rest} class={cn(checkboxVariants(), className)} data-slot="checkbox" role="checkbox">
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
  {@render children?.()}
  <ArkCheckbox.HiddenInput {tabindex} />
</ArkCheckbox.Root>
