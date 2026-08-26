"use client";

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
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const formSchema = v.object({
  description: v.pipe(
    v.string(),
    v.minLength(20, "Description must be at least 20 characters."),
    v.maxLength(100, "Description must be at most 100 characters.")
  ),
  title: v.pipe(
    v.string(),
    v.minLength(5, "Bug title must be at least 5 characters."),
    v.maxLength(32, "Bug title must be at most 32 characters.")
  ),
});

export const BugReportForm = () => {
  const form = useForm({
    initialInput: {
      description: "",
      title: "",
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
      id: "bug-report-submitted",
      title: "Bug submitted",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader
          description="Help us improve by reporting bugs you encounter."
          title="Bug Report"
        />
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["title"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Bug Title</FieldLabel>
                  <Input
                    {...field.props}
                    autoComplete="off"
                    placeholder="Login button not working on mobile"
                    value={field.input}
                  />
                  <FieldError>{field.errors?.[0]}</FieldError>
                </Field>
              )}
            </FormischField>
            <FormischField of={form} path={["description"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Description</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field.props}
                      className="min-h-24 resize-none"
                      placeholder="I'm having an issue with the login button on mobile."
                      rows={6}
                      value={field.input}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.input?.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription>
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
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default BugReportForm;
