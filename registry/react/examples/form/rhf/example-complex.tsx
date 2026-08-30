"use client";

import { createListCollection } from "@ark-ui/react";
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
      addons: [],
      billingPeriod: [""],
      emailNotifications: false,
      plan: "basic",
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
      id: "rhf-complex-submitted",
      title: "Preferences saved",
    });
  };

  return (
    <Card asChild className="w-full max-w-sm">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>You&apos;re almost there!</CardTitle>
          <CardDescription>
            Choose your subscription plan and billing period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="plan"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldSet>
                    <FieldLegend variant="label">Subscription plan</FieldLegend>
                    <FieldDescription>
                      Choose your subscription plan.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      onValueChange={({ value }) => field.onChange(value)}
                      value={field.value}
                    >
                      <FieldLabel>
                        <Field invalid={fieldState.invalid}>
                          <FieldContent>
                            <RadioGroupItem value="basic">Basic</RadioGroupItem>
                            <FieldDescription>
                              For individuals and small teams
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </FieldLabel>
                      <FieldLabel>
                        <Field invalid={fieldState.invalid}>
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
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            <FieldSeparator />
            <Controller
              control={form.control}
              name="billingPeriod"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>Billing period</FieldLabel>
                  <Select
                    collection={collection}
                    name={field.name}
                    onValueChange={({ value }) => field.onChange(value)}
                    value={field.value}
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
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            <FieldSeparator />
            <Controller
              control={form.control}
              name="addons"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldSet>
                    <FieldLegend variant="label">Add-ons</FieldLegend>
                    <FieldDescription>
                      Select additional features you&apos;d like to include.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {addons.map((addon) => (
                        <Field
                          invalid={fieldState.invalid}
                          key={addon.id}
                          orientation="horizontal"
                        >
                          <Checkbox
                            checked={field.value.includes(addon.id)}
                            name={field.name}
                            onCheckedChange={({ checked }) => {
                              const next = checked
                                ? [...field.value, addon.id]
                                : field.value.filter((v) => v !== addon.id);
                              field.onChange(next);
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
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            <FieldSeparator />
            <Controller
              control={form.control}
              name="emailNotifications"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid} orientation="horizontal">
                  <FieldContent>
                    <FieldLabel>Email notifications</FieldLabel>
                    <FieldDescription>
                      Receive email updates about your subscription.
                    </FieldDescription>
                    <FieldError>{fieldState.error?.message}</FieldError>
                  </FieldContent>
                  <Switch
                    checked={field.value}
                    name={field.name}
                    onCheckedChange={({ checked }) => field.onChange(checked)}
                  />
                </Field>
              )}
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
