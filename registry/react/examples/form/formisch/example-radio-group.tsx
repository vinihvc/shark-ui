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
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const formSchema = v.object({
  plan: v.pipe(
    v.string(),
    v.minLength(1, "You must select a subscription plan to continue.")
  ),
});

export function Example() {
  const form = useForm({
    initialInput: { plan: "" },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "plan-submitted",
      title: "Plan submitted",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            See pricing and features for each plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["plan"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldSet>
                    <FieldLegend>Plan</FieldLegend>
                    <FieldDescription className="ms-0!">
                      You can upgrade or downgrade your plan at any time.
                    </FieldDescription>
                    <RadioGroup
                      name={field.props.name}
                      onValueChange={({ value }) => field.onChange(value ?? "")}
                      value={field.input}
                    >
                      {plans.map((plan) => (
                        <FieldLabel key={plan.id}>
                          <Field invalid={Boolean(field.errors?.length)}>
                            <FieldContent>
                              <RadioGroupItem value={plan.id}>
                                {plan.title}
                              </RadioGroupItem>
                              <FieldDescription>
                                {plan.description}
                              </FieldDescription>
                            </FieldContent>
                          </Field>
                        </FieldLabel>
                      ))}
                    </RadioGroup>
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </FieldSet>
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
}

const plans = [
  {
    description: "For everyday use with basic features.",
    id: "starter",
    title: "Starter (100K tokens/month)",
  },
  {
    description: "For advanced AI usage with more features.",
    id: "pro",
    title: "Pro (1M tokens/month)",
  },
  {
    description: "For large teams and heavy usage.",
    id: "enterprise",
    title: "Enterprise (Unlimited tokens)",
  },
];

export default Example;
