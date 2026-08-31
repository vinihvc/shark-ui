import {
  Checkbox as ArkCheckbox,
  useCheckboxContext,
} from "@ark-ui/solid/checkbox";
import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "@/lib/utils";
import { checkboxVariants } from "./_shark/checkbox.contract";

export { checkboxVariants } from "./_shark/checkbox.contract";
export const useCheckbox = useCheckboxContext;

export const CheckboxGroup = (
  props: ComponentProps<typeof ArkCheckbox.Group>
) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkCheckbox.Group
      {...rest}
      class={cn("flex flex-col gap-2", local.class)}
      data-slot="checkbox-group"
    />
  );
};

export const Checkbox = (props: ComponentProps<typeof ArkCheckbox.Root>) => {
  const [local, rest] = splitProps(props, ["class", "tabIndex", "children"]);
  return (
    <ArkCheckbox.Root
      {...rest}
      class={cn(checkboxVariants(), local.class)}
      data-slot="checkbox"
      role="checkbox"
    >
      <ArkCheckbox.Control data-slot="checkbox-control">
        <CheckboxIndicator>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              d="m5 12 4 4 10-10"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </svg>
        </CheckboxIndicator>
        <CheckboxIndicator indeterminate>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              d="M5 12h14"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="3"
            />
          </svg>
        </CheckboxIndicator>
      </ArkCheckbox.Control>
      {local.children}
      <ArkCheckbox.HiddenInput tabIndex={local.tabIndex} />
    </ArkCheckbox.Root>
  );
};

export const CheckboxIndicator = (
  props: ComponentProps<typeof ArkCheckbox.Indicator>
) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkCheckbox.Indicator
      {...rest}
      class={cn(
        "absolute -inset-px",
        "flex items-center justify-center",
        "rounded-sm",
        "text-primary-foreground",
        "data-[state=checked]:bg-primary",
        "data-[state=unchecked]:hidden",
        "data-[state=indeterminate]:text-foreground",
        local.class
      )}
      data-slot="checkbox-indicator"
    />
  );
};
