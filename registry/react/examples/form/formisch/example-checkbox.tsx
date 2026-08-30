"use client";

import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";
import { toast } from "@/registry/react/components/toast";

export const Example = () => {
  const form = useForm({
    initialInput: {
      responses: true,
      tasks: [],
    },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "tasks-submitted",
      title: "Tasks submitted",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Manage your notification preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["responses"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldSet>
                    <FieldLegend variant="label">Responses</FieldLegend>
                    <FieldDescription>
                      Get notified for requests that take time, like research or
                      image generation.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal">
                        <Checkbox
                          checked={field.input}
                          disabled
                          name={field.props.name}
                          onCheckedChange={({ checked }) =>
                            field.onChange(checked === true)
                          }
                        />
                        <FieldLabel>Push notifications</FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <FieldError>{field.errors?.[0]}</FieldError>
                </Field>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["tasks"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldSet>
                    <FieldLegend variant="label">Tasks</FieldLegend>
                    <FieldDescription>
                      Get notified when tasks you&apos;ve created have updates.
                    </FieldDescription>
                    <FieldGroup>
                      {tasks.map((task) => (
                        <Field
                          invalid={Boolean(field.errors?.length)}
                          key={task.id}
                          orientation="horizontal"
                        >
                          <Checkbox
                            checked={field.input.includes(task.id)}
                            name={field.props.name}
                            onCheckedChange={({ checked }) => {
                              const newValue = checked
                                ? [...field.input, task.id]
                                : field.input.filter(
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

const formSchema = v.object({
  responses: v.boolean(),
  tasks: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Please select at least one notification type."),
    v.check(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      "Invalid notification type selected."
    )
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
