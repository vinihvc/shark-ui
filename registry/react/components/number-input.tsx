import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { ChevronDown, ChevronUp } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input, type InputProps } from "./input";

interface NumberInputProps
  extends React.ComponentProps<typeof ArkNumberInput.Root>,
    Pick<InputProps, "size"> {}

export const NumberInput = (props: NumberInputProps) => {
  const { size = "md", focusInputOnChange = true, className, ...rest } = props;

  return (
    <ArkNumberInput.Root
      className={cn("flex", className)}
      data-slot="number-input"
      focusInputOnChange={focusInputOnChange}
      {...rest}
    >
      <ArkNumberInput.Input asChild data-slot="number-input-input">
        <Input className="rounded-r-none border-r-0 focus:z-1" size={size} />
      </ArkNumberInput.Input>

      <ArkNumberInput.Control
        className="flex flex-col items-center"
        data-slot="number-input-control"
      >
        <ArkNumberInput.IncrementTrigger
          asChild
          data-slot="number-input-increment-trigger"
        >
          <Button
            className="flex-1 rounded-l-none rounded-br-none border-b-0"
            size={`icon-${size}`}
            variant="outline"
          >
            <ChevronUp />
            <span className="sr-only">Increment</span>
          </Button>
        </ArkNumberInput.IncrementTrigger>

        <ArkNumberInput.DecrementTrigger
          asChild
          data-slot="number-input-decrement-trigger"
        >
          <Button
            className="flex-1 rounded-l-none rounded-tr-none"
            size={`icon-${size}`}
            variant="outline"
          >
            <ChevronDown />
            <span className="sr-only">Decrement</span>
          </Button>
        </ArkNumberInput.DecrementTrigger>
      </ArkNumberInput.Control>
    </ArkNumberInput.Root>
  );
};
