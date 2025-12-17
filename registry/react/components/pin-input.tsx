import { ark } from "@ark-ui/react";
import { PinInput as ArkPinInput } from "@ark-ui/react/pin-input";
import type React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/registry/react/components/input";

interface PinInputProps extends React.ComponentProps<typeof ArkPinInput.Root> {
  /**
   * The size of the pin input
   *
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Adds a fake caret to the pin input
   *
   * @default false
   */
  withFakeCaret?: boolean;
}

export const PinInput = (props: PinInputProps) => {
  const {
    size = "md",
    withFakeCaret,
    otp = true,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkPinInput.Root
      className="group/pin-input"
      data-size={size}
      {...(!withFakeCaret && { placeholder: "" })}
      otp={otp}
      {...rest}
    >
      <ArkPinInput.Control className={cn("flex items-center gap-2", className)}>
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
    <ArkPinInput.Input asChild {...rest}>
      <Input
        className={cn(
          "relative",
          "size-9 group-data-[size=lg]/pin-input:size-10 group-data-[size=sm]/pin-input:size-8",
          "p-0",
          "text-center",
          className
        )}
      />
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
      data-part="separator"
      data-scope="pin-input"
      {...rest}
    />
  );
};
