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
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const formSchema = z.object({
  twoFactor: z.boolean().refine((val) => val === true, {
    message: "It is highly recommended to enable two-factor authentication.",
  }),
});

export const Example = () => {
  const form = useForm({
    defaultValues: {
      twoFactor: false,
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "about-submitted",
        title: "About submitted",
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
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>
            Manage your account security preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field
                  invalid={!field.state.meta.isValid}
                  orientation="horizontal"
                >
                  <FieldContent>
                    <FieldLabel>Multi-factor authentication</FieldLabel>
                    <FieldDescription>
                      Enable multi-factor authentication to secure your account.
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
              name="twoFactor"
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

export default Example;
