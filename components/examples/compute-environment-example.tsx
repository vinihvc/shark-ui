"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/react/components/number-input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Switch } from "@/registry/react/components/switch";

export const ComputeEnvironmentExample = () => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
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
        <NumberField className="max-w-40" defaultValue="4" max={99} min={1}>
          <NumberFieldGroup>
            <NumberFieldDecrement tabIndex={-1} />
            <NumberFieldInput tabIndex={-1} />
            <NumberFieldIncrement tabIndex={-1} />
          </NumberFieldGroup>
        </NumberField>
      </Field>

      <Field className="w-full" orientation="horizontal" reverse>
        <Switch tabIndex={-1} />
        <FieldLabel>Wallpaper Tinting</FieldLabel>
      </Field>
    </div>
  );
};
