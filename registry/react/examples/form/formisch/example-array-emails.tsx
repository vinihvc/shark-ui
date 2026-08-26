"use client";

import {
  FieldArray,
  Form,
  Field as FormischField,
  insert,
  remove,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { toast } from "@registry/react/components/toast";
import { XIcon } from "lucide-react";
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
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const formSchema = v.object({
  emails: v.pipe(
    v.array(
      v.object({
        contact: v.object({
          address: v.pipe(
            v.string(),
            v.nonEmpty("Enter an email address."),
            v.email("Enter a valid email address.")
          ),
        }),
      })
    ),
    v.minLength(1, "Add at least one email address."),
    v.maxLength(5, "You can add up to 5 email addresses.")
  ),
});

const Example = () => {
  const form = useForm({
    initialInput: { emails: [{ contact: { address: "" } }] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "formisch-array-emails-submitted",
      title: "Contact emails saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Contact emails</CardTitle>
          <CardDescription>
            Manage your contact email addresses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldArray of={form} path={["emails"]}>
            {(arrayField) => (
              <FieldSet className="gap-4">
                <FieldLegend variant="label">Email addresses</FieldLegend>
                <FieldDescription>
                  Add up to 5 email addresses where we can contact you.
                </FieldDescription>
                <FieldGroup className="gap-4">
                  {arrayField.items.map((itemId, index) => (
                    <FormischField
                      key={itemId}
                      of={form}
                      path={["emails", index, "contact", "address"]}
                    >
                      {(field) => (
                        <Field
                          invalid={Boolean(field.errors?.length)}
                          orientation="horizontal"
                        >
                          <FieldContent>
                            <InputGroup>
                              <InputGroupInput
                                {...field.props}
                                autoComplete="email"
                                onChange={(e) => field.onChange(e.target.value)}
                                placeholder="name@example.com"
                                type="email"
                                value={field.input}
                              />
                              {arrayField.items.length > 1 && (
                                <InputGroupAddon align="inline-end">
                                  <InputGroupButton
                                    aria-label={`Remove email ${String(index + 1)}`}
                                    onClick={() =>
                                      remove(form, {
                                        at: index,
                                        path: ["emails"],
                                      })
                                    }
                                    size="icon-xs"
                                    variant="ghost"
                                  >
                                    <XIcon aria-hidden className="size-4" />
                                  </InputGroupButton>
                                </InputGroupAddon>
                              )}
                            </InputGroup>
                            <FieldError>{field.errors?.[0]}</FieldError>
                          </FieldContent>
                        </Field>
                      )}
                    </FormischField>
                  ))}
                  <Button
                    disabled={arrayField.items.length >= 5}
                    onClick={() =>
                      insert(form, {
                        initialInput: { contact: { address: "" } },
                        path: ["emails"],
                      })
                    }
                    size="sm"
                    variant="outline"
                  >
                    Add email address
                  </Button>
                </FieldGroup>
                {arrayField.errors?.[0] && (
                  <Field invalid>
                    <FieldError>{arrayField.errors[0]}</FieldError>
                  </Field>
                )}
              </FieldSet>
            )}
          </FieldArray>
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

export default Example;
