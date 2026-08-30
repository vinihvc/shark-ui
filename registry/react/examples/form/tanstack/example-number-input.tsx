"use client";

import { toast } from "@registry/react/components/toast";
import { useForm } from "@tanstack/react-form";
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

export const Example = () => {
  const form = useForm({
    defaultValues: {
      expectedSalary: undefined as number | undefined,
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "salary-expectation-submitted",
        title: "Salary expectation saved",
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <Card asChild className="w-full sm:max-w-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Salary expectations</CardTitle>
          <CardDescription>
            Share your target gross annual salary in EUR.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldLabel>Expected annual salary</FieldLabel>
                  <InputGroup>
                    <NumberInput
                      name={field.name}
                      onValueChange={({ value }) => {
                        field.handleChange(Number(value) ?? 0);
                      }}
                      value={String(field.state.value ?? "")}
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
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="expectedSalary"
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
