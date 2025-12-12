import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { Check } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const CheckboxGroup = (
  props: React.ComponentProps<typeof ArkCheckbox.Group>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCheckbox.Group
      className={cn("flex flex-col gap-2", className)}
      {...rest}
    />
  );
};

export const Checkbox = (
  props: React.ComponentProps<typeof ArkCheckbox.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCheckbox.Root
      className={cn(
        "peer",
        "size-4 shrink-0",
        "rounded-sm",
        "border border-input shadow-xs outline-none",
        "transition-shadow",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        "dark:data-[state=checked]:bg-primary",
        "dark:bg-input/30",
        className
      )}
      {...rest}
    >
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator className="grid place-content-center text-current transition-none [&_svg]:size-3.5">
          <Check />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>

      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
};
