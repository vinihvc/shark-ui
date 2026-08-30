"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
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
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const form = useForm({
    defaultValues: {
      emails: [{ address: "" }],
    },
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "emails",
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      id: "rhf-array-emails-submitted",
      title: "Contact emails saved",
    });
  };

  const emailsError = form.formState.errors.emails;
  let arrayLevelMessage: string | undefined;
  if (
    emailsError &&
    typeof emailsError === "object" &&
    "root" in emailsError &&
    emailsError.root &&
    typeof emailsError.root === "object" &&
    "message" in emailsError.root
  ) {
    arrayLevelMessage = String(emailsError.root.message);
  } else if (
    emailsError &&
    typeof emailsError === "object" &&
    "message" in emailsError &&
    typeof (emailsError as { message?: unknown }).message === "string"
  ) {
    arrayLevelMessage = (emailsError as { message: string }).message;
  }

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Contact emails</CardTitle>
          <CardDescription>
            Manage your contact email addresses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldSet className="gap-4">
            <FieldLegend variant="label">Email addresses</FieldLegend>
            <FieldDescription>
              Add up to 5 email addresses where we can contact you.
            </FieldDescription>
            <FieldGroup className="gap-4">
              {fields.map((field, index) => (
                <Controller
                  control={form.control}
                  key={field.id}
                  name={`emails.${index}.address`}
                  render={({ field: controllerField, fieldState }) => (
                    <Field
                      invalid={fieldState.invalid}
                      orientation="horizontal"
                    >
                      <FieldContent>
                        <InputGroup>
                          <InputGroupInput
                            {...controllerField}
                            autoComplete="email"
                            placeholder="name@example.com"
                            type="email"
                          />
                          {fields.length > 1 ? (
                            <InputGroupAddon align="inline-end">
                              <InputGroupButton
                                aria-label={`Remove email ${String(index + 1)}`}
                                onClick={() => remove(index)}
                                size="icon-xs"
                                variant="ghost"
                              >
                                <XIcon aria-hidden className="size-4" />
                              </InputGroupButton>
                            </InputGroupAddon>
                          ) : null}
                        </InputGroup>
                        <FieldError>{fieldState.error?.message}</FieldError>
                      </FieldContent>
                    </Field>
                  )}
                />
              ))}
              <Button
                disabled={fields.length >= 5}
                onClick={() => append({ address: "" })}
                size="sm"
                variant="outline"
              >
                Add email address
              </Button>
            </FieldGroup>
            {arrayLevelMessage ? (
              <Field invalid>
                <FieldError>{arrayLevelMessage}</FieldError>
              </Field>
            ) : null}
          </FieldSet>
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
  emails: z
    .array(
      z.object({
        address: z.string().email("Enter a valid email address."),
      })
    )
    .min(1, "Add at least one email address.")
    .max(5, "You can add up to 5 email addresses."),
});

export default Example;
