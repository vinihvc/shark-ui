<script lang="ts">
import { Checkbox as ArkCheckbox } from "@ark-ui/svelte/checkbox";
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof ArkCheckbox.Indicator> & { class?: string };
let { class: className, children, ...rest }: Props = $props();
</script>

<ArkCheckbox.Indicator
  {...rest}
  class={cn(
    'absolute -inset-px',
    'flex items-center justify-center',
    'rounded-sm',
    'text-primary-foreground',
    'data-[state=checked]:bg-primary',
    'data-[state=unchecked]:hidden',
    'data-[state=indeterminate]:text-foreground',
    className,
  )}
  data-slot="checkbox-indicator"
>
  {@render children?.()}
</ArkCheckbox.Indicator>
