"use client";

import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { toast } from "@registry/react/components/toast";
import * as v from "valibot";
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

const formSchema = v.object({
  expectedSalary: v.pipe(
    v.string(),
    v.transform((s) => Number(s)),
    v.minValue(1000, "Salary must be at least €1,000."),
    v.maxValue(1_000_000, "Salary must be less than €1,000,000.00.")
  ),
});

export const Example = () => {
  const form = useForm({
    initialInput: { expectedSalary: "" },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "salary-expectation-submitted",
      title: "Salary expectation saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-sm">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Salary expectations</CardTitle>
          <CardDescription>
            Share your target gross annual salary in EUR.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["expectedSalary"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Expected annual salary</FieldLabel>
                  <InputGroup>
                    <NumberInput
                      onValueChange={({ value }) => field.onChange(value)}
                      value={String(field.input ?? "")}
                    >
                      <NumberInputInput {...field.props} />
                    </NumberInput>
                    <InputGroupAddon>
                      <InputGroupText>€</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>EUR</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError>{field.errors?.[0]}</FieldError>
                </Field>
              )}
            </FormischField>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => reset(form)} variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default Example;
