import { ark } from "@ark-ui/solid/factory";
import { PinInput as ArkPinInput } from "@ark-ui/solid/pin-input";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/registry/solid/components/input";

interface InputOtpProps
  extends ComponentProps<typeof ArkPinInput.Root>,
    Pick<InputProps, "size"> {}

export const InputOtp = (props: InputOtpProps) => {
  const { placeholder, otp = true, className, children, ...rest } = props;

  return (
    <ArkPinInput.Root
      class="group/input-otp"
      data-slot="input-otp"
      otp={otp}
      placeholder={placeholder ?? ""}
      {...rest}
    >
      <ArkPinInput.Control
        class={cn(
          "flex items-center gap-2",
          "*:data-[slot=input-otp-input]:size-9",
          className
        )}
        data-slot="input-otp-control"
      >
        {children}
      </ArkPinInput.Control>

      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  );
};

export const InputOtpSlot = (
  props: ComponentProps<typeof ArkPinInput.Input>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkPinInput.Input asChild data-slot="input-otp-input" {...rest}>
      <Input
        class={cn("relative p-0 text-center text-base tabular-nums", className)}
      />
    </ArkPinInput.Input>
  );
};

export const InputOtpSeparator = (props: ComponentProps<typeof ark.hr>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.hr
      class={cn("h-0.5 w-2 rounded-full bg-foreground", className)}
      data-slot="input-otp-separator"
      {...rest}
    />
  );
};
