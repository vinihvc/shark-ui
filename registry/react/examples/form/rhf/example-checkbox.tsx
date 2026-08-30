"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@registry/react/components/card";
import { Checkbox } from "@registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@registry/react/components/field";
import { toast } from "@registry/react/components/toast";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

export const Example = () => {
  const form = useForm({
    defaultValues: {
      responses: true,
      tasks: [],
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
      id: "tasks-submitted",
      title: "Tasks submitted",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Manage your notification preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="responses"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldSet>
                    <FieldLegend variant="label">Responses</FieldLegend>
                    <FieldDescription>
                      Get notified for requests that take time, like research or
                      image generation.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal">
                        <Checkbox
                          checked={field.value}
                          disabled
                          name={field.name}
                          onCheckedChange={field.onChange}
                        />
                        <FieldLabel>Push notifications</FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
            />
            <FieldSeparator />
            <Controller
              control={form.control}
              name="tasks"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldSet>
                    <FieldLegend variant="label">Tasks</FieldLegend>
                    <FieldDescription>
                      Get notified when tasks you&apos;ve created have updates.
                    </FieldDescription>
                    <FieldGroup>
                      {tasks.map((task) => (
                        <Field
                          invalid={fieldState.invalid}
                          key={task.id}
                          orientation="horizontal"
                        >
                          <Checkbox
                            checked={field.value.includes(task.id)}
                            name={field.name}
                            onCheckedChange={({ checked }) => {
                              const newValue = checked
                                ? [...field.value, task.id]
                                : field.value.filter(
                                    (value) => value !== task.id
                                  );
                              field.onChange(newValue);
                            }}
                          />
                          <FieldLabel>{task.label}</FieldLabel>
                        </Field>
                      ))}
                    </FieldGroup>
                  </FieldSet>
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
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "Please select at least one notification type.")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "Invalid notification type selected.",
      }
    ),
});

const tasks = [
  {
    id: "push",
    label: "Push notifications",
  },
  {
    id: "email",
    label: "Email notifications",
  },
];

export default Example;
