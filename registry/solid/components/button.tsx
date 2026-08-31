import { ark } from "@ark-ui/solid/factory";
import { Show, splitProps, type ComponentProps } from "solid-js";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_shark/button.contract";

export { buttonVariants } from "./_shark/button.contract";

export interface ButtonProps
  extends ComponentProps<typeof ark.button>,
    VariantProps<typeof buttonVariants> {
  clickEffect?: boolean;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, [
    "variant",
    "size",
    "clickEffect",
    "pill",
    "isLoading",
    "class",
    "children",
    "type",
  ]);

  return (
    <ark.button
      {...rest}
      aria-busy={local.isLoading || undefined}
      aria-disabled={local.isLoading || undefined}
      class={cn(
        buttonVariants({
          clickEffect: local.clickEffect ?? true,
          pill: local.pill ?? false,
          size: local.size ?? "md",
          variant: local.variant ?? "default",
        }),
        local.class
      )}
      data-size={local.size ?? "md"}
      data-slot="button"
      data-state={local.isLoading ? "loading" : "idle"}
      type={local.type ?? "button"}
    >
      <Show fallback={local.children} when={local.isLoading}>
        <span aria-hidden class="invisible">
          {local.children}
        </span>
        <span class="sr-only">{local.children}</span>
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
      </Show>
    </ark.button>
  );
};
