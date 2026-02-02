"use client";

import { ark } from "@ark-ui/react";
import { PinInput as ArkPinInput } from "@ark-ui/react/pin-input";
import type React from "react";
import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/registry/react/components/input";

interface PinInputProps
  extends React.ComponentProps<typeof ArkPinInput.Root>,
    Pick<InputProps, "size"> {
  /**
   * Adds a fake caret to the pin input
   *
   * @default false
   */
  withFakeCaret?: boolean;
}

export const PinInput = (props: PinInputProps) => {
  const { withFakeCaret, otp = true, className, children, ...rest } = props;

  return (
    <ArkPinInput.Root
      className="group/pin-input"
      data-slot="pin-input"
      {...(!withFakeCaret && { placeholder: "" })}
      otp={otp}
      {...rest}
    >
      <ArkPinInput.Control
        className={cn("flex items-center gap-2", className)}
        data-slot="pin-input-control"
      >
        {children}
      </ArkPinInput.Control>

      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  );
};

export const PinInputSlot = (
  props: React.ComponentProps<typeof ArkPinInput.Input>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPinInput.Input asChild data-slot="pin-input-input" {...rest}>
      <Input className={cn("relative size-8 p-0 text-center", className)} />
    </ArkPinInput.Input>
  );
};

export const PinInputSeparator = (
  props: React.ComponentProps<typeof ark.hr>
) => {
  const { className, ...rest } = props;

  return (
    <ark.hr
      className={cn("h-0.5 w-2 rounded-full bg-foreground", className)}
      data-slot="pin-input-separator"
      {...rest}
    />
  );
};
