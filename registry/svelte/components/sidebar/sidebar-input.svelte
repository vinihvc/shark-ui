<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
let { class: className, ...rest }: HTMLInputAttributes = $props();
</script>
<input {...rest} class={cn("h-8 w-full rounded-md border border-input bg-background px-2 text-sm shadow-none outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32", className)} data-sidebar="input" data-slot="sidebar-input" />
