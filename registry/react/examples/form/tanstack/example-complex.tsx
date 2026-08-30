"use client";

import { createListCollection } from "@ark-ui/react";
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
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { Switch } from "@/registry/react/components/switch";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const form = useForm({
    defaultValues: {
      addons: [] as string[],
      billingPeriod: [""],
      emailNotifications: false,
      plan: "basic" as "basic" | "pro",
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "rhf-complex-submitted",
        title: "Preferences saved",
      });
    },
    validators: { onSubmit: formSchema },
  });

  return (
    <Card asChild className="w-full max-w-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>You&apos;re almost there!</CardTitle>
          <CardDescription>
            Choose your subscription plan and billing period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldSet>
                    <FieldLegend variant="label">Subscription plan</FieldLegend>
                    <FieldDescription>
                      Choose your subscription plan.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      onValueChange={({ value }) => {
                        if (value === "basic" || value === "pro") {
                          field.handleChange(value);
                        }
                      }}
                      value={field.state.value}
                    >
                      <FieldLabel>
                        <Field invalid={!field.state.meta.isValid}>
                          <FieldContent>
                            <RadioGroupItem value="basic">Basic</RadioGroupItem>
                            <FieldDescription>
                              For individuals and small teams
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </FieldLabel>
                      <FieldLabel>
                        <Field invalid={!field.state.meta.isValid}>
                          <FieldContent>
                            <RadioGroupItem value="pro">Pro</RadioGroupItem>
                            <FieldDescription>
                              For businesses with higher demands
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </FieldLabel>
                    </RadioGroup>
                  </FieldSet>
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="plan"
            />
            <FieldSeparator />
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldLabel>Billing period</FieldLabel>
                  <Select
                    collection={collection}
                    name={field.name}
                    onValueChange={({ value }) => field.handleChange(value)}
                    value={field.state.value}
                  >
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {collection.items.map((item) => (
                        <SelectItem item={item} key={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    Choose how often you want to be billed.
                  </FieldDescription>
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="billingPeriod"
            />
            <FieldSeparator />
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldSet>
                    <FieldLegend variant="label">Add-ons</FieldLegend>
                    <FieldDescription>
                      Select additional features you&apos;d like to include.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {addons.map((addon) => (
                        <Field
                          invalid={!field.state.meta.isValid}
                          key={addon.id}
                          orientation="horizontal"
                        >
                          <Checkbox
                            checked={field.state.value.includes(addon.id)}
                            name={field.name}
                            onCheckedChange={({ checked }) => {
                              const next = checked
                                ? [...field.state.value, addon.id]
                                : field.state.value.filter(
                                    (v) => v !== addon.id
                                  );
                              field.handleChange(next);
                            }}
                          />
                          <FieldContent>
                            <FieldLabel>{addon.title}</FieldLabel>
                            <FieldDescription>
                              {addon.description}
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      ))}
                    </FieldGroup>
                  </FieldSet>
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="addons"
            />
            <FieldSeparator />
            <form.Field
              children={(field) => (
                <Field
                  invalid={!field.state.meta.isValid}
                  orientation="horizontal"
                >
                  <FieldContent>
                    <FieldLabel>Email notifications</FieldLabel>
                    <FieldDescription>
                      Receive email updates about your subscription.
                    </FieldDescription>
                    <FieldError>
                      {field.state.meta.errors
                        .map((e) => e?.message || e)
                        .join(", ")}
                    </FieldError>
                  </FieldContent>
                  <Switch
                    checked={field.state.value}
                    name={field.name}
                    onCheckedChange={({ checked }) =>
                      field.handleChange(checked)
                    }
                  />
                </Field>
              )}
              name="emailNotifications"
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save preferences</Button>
          <Button onClick={() => form.reset()} variant="outline">
            Reset
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const formSchema = z.object({
  addons: z
    .array(z.string())
    .min(1, "Please select at least one add-on.")
    .max(3, "You can select up to 3 add-ons.")
    .refine(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      {
        message: "You selected an invalid add-on.",
      }
    ),
  billingPeriod: z
    .array(z.string())
    .min(1, "Please select a billing period.")
    .refine((val) => val[0] !== "", "Please select a billing period."),
  emailNotifications: z.boolean(),
  plan: z.enum(["basic", "pro"], {
    message: "Please select a subscription plan.",
  }),
});

const collection = createListCollection({
  items: [
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" },
  ],
});

const addons = [
  {
    description: "Advanced analytics and reporting",
    id: "analytics",
    title: "Analytics",
  },
  {
    description: "Automated daily backups",
    id: "backup",
    title: "Backup",
  },
  {
    description: "24/7 premium customer support",
    id: "support",
    title: "Priority Support",
  },
] as const;

export default Example;
