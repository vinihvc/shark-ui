"use client";

import { createListCollection } from "@ark-ui/react";
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

const formSchema = v.object({
  addons: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Please select at least one add-on."),
    v.maxLength(3, "You can select up to 3 add-ons."),
    v.check(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      "You selected an invalid add-on."
    )
  ),
  billingPeriod: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Please select a billing period."),
    v.check((val) => val[0] !== "", "Please select a billing period.")
  ),
  emailNotifications: v.boolean(),
  plan: v.picklist(["basic", "pro"], "Please select a subscription plan."),
});

const initialInput = {
  addons: [] as string[],
  billingPeriod: [""],
  emailNotifications: false,
  plan: "basic" as "basic" | "pro",
};

const Example = () => {
  const form = useForm({
    initialInput,
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "rhf-complex-submitted",
      title: "Preferences saved",
    });
  };

  return (
    <Card asChild className="w-full max-w-sm">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>You&apos;re almost there!</CardTitle>
          <CardDescription>
            Choose your subscription plan and billing period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["plan"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldSet>
                    <FieldLegend variant="label">Subscription plan</FieldLegend>
                    <FieldDescription>
                      Choose your subscription plan.
                    </FieldDescription>
                    <RadioGroup
                      name={field.props.name}
                      onValueChange={({ value }) => {
                        if (value === "basic" || value === "pro") {
                          field.onChange(value);
                        }
                      }}
                      value={field.input}
                    >
                      <FieldLabel>
                        <Field invalid={Boolean(field.errors?.length)}>
                          <FieldContent>
                            <RadioGroupItem value="basic">Basic</RadioGroupItem>
                            <FieldDescription>
                              For individuals and small teams
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </FieldLabel>
                      <FieldLabel>
                        <Field invalid={Boolean(field.errors?.length)}>
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
                  <FieldError>{field.errors?.[0]}</FieldError>
                </Field>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["billingPeriod"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Billing period</FieldLabel>
                  <Select
                    collection={collection}
                    name={field.props.name}
                    onValueChange={({ value }) => field.onChange(value)}
                    value={field.input}
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
                  <FieldError>{field.errors?.[0]}</FieldError>
                </Field>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["addons"]}>
              {(field) => {
                const list = Array.isArray(field.input) ? field.input : [];
                return (
                  <Field invalid={Boolean(field.errors?.length)}>
                    <FieldSet>
                      <FieldLegend variant="label">Add-ons</FieldLegend>
                      <FieldDescription>
                        Select additional features you&apos;d like to include.
                      </FieldDescription>
                      <FieldGroup data-slot="checkbox-group">
                        {addons.map((addon) => (
                          <Field
                            invalid={Boolean(field.errors?.length)}
                            key={addon.id}
                            orientation="horizontal"
                          >
                            <Checkbox
                              checked={list.includes(addon.id)}
                              name={field.props.name}
                              onCheckedChange={({ checked }) => {
                                const next = checked
                                  ? [...list, addon.id]
                                  : list.filter((v) => v !== addon.id);
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
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </Field>
                );
              }}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["emailNotifications"]}>
              {(field) => (
                <Field
                  invalid={Boolean(field.errors?.length)}
                  orientation="horizontal"
                >
                  <FieldContent>
                    <FieldLabel>Email notifications</FieldLabel>
                    <FieldDescription>
                      Receive email updates about your subscription.
                    </FieldDescription>
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </FieldContent>
                  <Switch
                    checked={field.input}
                    name={field.props.name}
                    onCheckedChange={({ checked }) => field.onChange(checked)}
                  />
                </Field>
              )}
            </FormischField>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save preferences</Button>
          <Button onClick={() => reset(form)} variant="outline">
            Reset
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

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
