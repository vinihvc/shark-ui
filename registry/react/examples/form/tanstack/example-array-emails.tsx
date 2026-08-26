"use client";

import { toast } from "@registry/react/components/toast";
import { useForm } from "@tanstack/react-form";
import { XIcon } from "lucide-react";
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

const Example = () => {
  const form = useForm({
    defaultValues: {
      emails: [{ address: "" }],
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "rhf-array-emails-submitted",
        title: "Contact emails saved",
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
          <CardTitle>Contact emails</CardTitle>
          <CardDescription>
            Manage your contact email addresses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form.Field
            children={(emailsField) => {
              const arrayLevelMessage = emailsField.state.meta.errors
                .map((e) => e?.message || e)
                .filter(Boolean)
                .join(", ");

              return (
                <FieldSet className="gap-4">
                  <FieldLegend variant="label">Email addresses</FieldLegend>
                  <FieldDescription>
                    Add up to 5 email addresses where we can contact you.
                  </FieldDescription>
                  <FieldGroup className="gap-4">
                    {emailsField.state.value.map((_, index) => (
                      <form.Field
                        children={(subField) => (
                          <Field
                            invalid={!subField.state.meta.isValid}
                            orientation="horizontal"
                          >
                            <FieldContent>
                              <InputGroup>
                                <InputGroupInput
                                  autoComplete="email"
                                  name={subField.name}
                                  onBlur={subField.handleBlur}
                                  onChange={(e) =>
                                    subField.handleChange(e.target.value)
                                  }
                                  placeholder="name@example.com"
                                  type="email"
                                  value={subField.state.value}
                                />
                                {emailsField.state.value.length > 1 ? (
                                  <InputGroupAddon align="inline-end">
                                    <InputGroupButton
                                      aria-label={`Remove email ${String(index + 1)}`}
                                      onClick={() =>
                                        emailsField.removeValue(index)
                                      }
                                      size="icon-xs"
                                      variant="ghost"
                                    >
                                      <XIcon aria-hidden className="size-4" />
                                    </InputGroupButton>
                                  </InputGroupAddon>
                                ) : null}
                              </InputGroup>
                              <FieldError>
                                {subField.state.meta.errors
                                  .map((e) => e?.message || e)
                                  .join(", ")}
                              </FieldError>
                            </FieldContent>
                          </Field>
                        )}
                        key={`email-${String(index)}`}
                        name={`emails[${index}].address`}
                      />
                    ))}
                    <Button
                      disabled={emailsField.state.value.length >= 5}
                      onClick={() => emailsField.pushValue({ address: "" })}
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
              );
            }}
            mode="array"
            name="emails"
          />
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
