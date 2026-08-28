"use client";

import { cn } from "@/lib/utils";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Switch } from "@/registry/react/components/switch";

export const ComputeEnvironmentExample = (
  props: React.ComponentProps<"div">
) => {
  const { className, ...rest } = props;

  return (
    <div className={cn("flex w-full flex-col gap-6", className)} {...rest}>
      <FieldSet>
        <FieldLegend>Compute Environment</FieldLegend>
        <RadioGroup className="w-full" defaultValue="kubernetes">
          <FieldLabel>
            <Field>
              <FieldContent>
                <RadioGroupItem tabIndex={-1} value="kubernetes">
                  Kubernetes
                </RadioGroupItem>
                <FieldDescription>
                  Managed containers and orchestration.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
          <FieldLabel>
            <Field>
              <FieldContent>
                <RadioGroupItem tabIndex={-1} value="vm">
                  Virtual Machine
                </RadioGroupItem>
                <FieldDescription>Traditional VM workloads.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>

      <Field className="w-full" orientation="horizontal">
        <FieldContent>
          <FieldLabel>Number of GPUs</FieldLabel>
          <FieldDescription>You can add more later.</FieldDescription>
        </FieldContent>
        <NumberInput className="max-w-40" defaultValue="4" max={99} min={1}>
          <NumberInputGroup>
            <NumberInputDecrement tabIndex={-1} />
            <NumberInputInput tabIndex={-1} />
            <NumberInputIncrement tabIndex={-1} />
          </NumberInputGroup>
        </NumberInput>
      </Field>

      <Field className="w-full" orientation="horizontal" reverse>
        <Switch tabIndex={-1} />
        <FieldLabel>Wallpaper Tinting</FieldLabel>
      </Field>
    </div>
  );
};
