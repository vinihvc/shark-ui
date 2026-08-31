<script lang="ts">
import { Checkbox as ArkCheckbox } from "@ark-ui/svelte/checkbox";
import type { ComponentProps } from "svelte";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof ArkCheckbox.Group> & { class?: string };
let { class: className, children, ...rest }: Props = $props();
</script>

<ArkCheckbox.Group {...rest} class={cn('flex flex-col gap-2', className)} data-slot="checkbox-group">
  {@render children?.()}
</ArkCheckbox.Group>
