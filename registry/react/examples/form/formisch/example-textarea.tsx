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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const formSchema = v.object({
  about: v.pipe(
    v.string(),
    v.minLength(10, "Please provide at least 10 characters."),
    v.maxLength(200, "Please keep it under 200 characters.")
  ),
});

const Example = () => {
  const form = useForm({
    initialInput: { about: "" },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "about-submitted",
      title: "About submitted",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Personalization</CardTitle>
          <CardDescription>
            Customize your experience by telling us more about yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["about"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>More about you</FieldLabel>
                  <Textarea
                    {...field.props}
                    className="min-h-[120px]"
                    placeholder="I'm a software engineer..."
                    value={field.input}
                  />
                  <FieldDescription>
                    Tell us more about yourself. This will be used to help us
                    personalize your experience.
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
          <Button type="submit">Save</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default Example;
