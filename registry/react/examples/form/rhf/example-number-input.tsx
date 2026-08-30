"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/registry/react/components/input-group";
import {
  NumberInput,
  NumberInputInput,
} from "@/registry/react/components/number-input";
import { toast } from "@/registry/react/components/toast";

export const Example = () => {
  const form = useForm({
    defaultValues: {
      expectedSalary: undefined,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      id: "salary-expectation-submitted",
      title: "Salary expectation saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-sm">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Salary expectations</CardTitle>
          <CardDescription>
            Share your target gross annual salary in EUR.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="expectedSalary"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>Expected annual salary</FieldLabel>
                  <InputGroup>
                    <NumberInput
                      name={field.name}
                      onValueChange={({ value }) => {
                        field.onChange(Number(value) ?? 0);
                      }}
                      value={String(field.value)}
                    >
                      <NumberInputInput />
                    </NumberInput>
                    <InputGroupAddon>
                      <InputGroupText>€</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>EUR</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => form.reset()} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const formSchema = z.object({
  expectedSalary: z
    .number("Please provide a salary amount.")
    .min(1000, "Salary must be at least €1,000.")
    .max(1_000_000, "Salary must be less than €1,000,000.00."),
});

export default Example;
