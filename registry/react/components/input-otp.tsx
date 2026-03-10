"use client";

import { ark } from "@ark-ui/react";
import { PinInput as ArkPinInput } from "@ark-ui/react/pin-input";
import type React from "react";
import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/registry/react/components/input";

interface InputOtpProps
  extends React.ComponentProps<typeof ArkPinInput.Root>,
    Pick<InputProps, "size"> {}

export const InputOtp = (props: InputOtpProps) => {
  const { placeholder, otp = true, className, children, ...rest } = props;

  return (
    <ArkPinInput.Root
      className="group/input-otp"
      data-slot="input-otp"
      otp={otp}
      placeholder={placeholder ?? ""}
      {...rest}
    >
      <ArkPinInput.Control
        className={cn(
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
  props: React.ComponentProps<typeof ArkPinInput.Input>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPinInput.Input asChild data-slot="input-otp-input" {...rest}>
      <Input
        className={cn(
          "relative p-0 text-center text-base tabular-nums",
          className
        )}
      />
    </ArkPinInput.Input>
  );
};

export const InputOtpSeparator = (
  props: React.ComponentProps<typeof ark.hr>
) => {
  const { className, ...rest } = props;

  return (
    <ark.hr
      className={cn("h-0.5 w-2 rounded-full bg-foreground", className)}
      data-slot="input-otp-separator"
      {...rest}
    />
  );
};
