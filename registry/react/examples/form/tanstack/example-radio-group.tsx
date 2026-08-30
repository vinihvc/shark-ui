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

export function Example() {
  const form = useForm({
    defaultValues: {
      plan: "",
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "plan-submitted",
        title: "Plan submitted",
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            See pricing and features for each plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldSet>
                    <FieldLegend>Plan</FieldLegend>
                    <FieldDescription className="ms-0!">
                      You can upgrade or downgrade your plan at any time.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      onValueChange={({ value }) =>
                        field.handleChange(value ?? "")
                      }
                      value={field.state.value}
                    >
                      {plans.map((plan) => (
                        <FieldLabel key={plan.id}>
                          <Field invalid={!field.state.meta.isValid}>
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
                    <FieldError>
                      {field.state.meta.errors
                        .map((e) => e?.message || e)
                        .join(", ")}
                    </FieldError>
                  </FieldSet>
                </Field>
              )}
              name="plan"
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

const formSchema = z.object({
  plan: z.string().min(1, "You must select a subscription plan to continue."),
});

export default Example;
