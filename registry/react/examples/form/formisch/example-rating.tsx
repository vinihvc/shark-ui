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
import { Rating } from "@/registry/react/components/rating";

const Example = () => {
  const form = useForm({
    initialInput: { recommendScore: 0 },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "rating-submitted",
      title: "Feedback saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Quick feedback</CardTitle>
          <CardDescription>
            Help us improve by sharing how likely you are to recommend Shark UI
            to a colleague.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["recommendScore"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>How useful is this project?</FieldLabel>
                  <Rating
                    count={5}
                    onValueChange={(e) => field.onChange(e.value ?? 0)}
                    value={(field.input as number) ?? 0}
                  />
                  <FieldDescription>
                    1 = not likely, 5 = very likely.
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

const formSchema = v.object({
  recommendScore: v.pipe(
    v.number(),
    v.minValue(1, "Please rate how likely you are to recommend us."),
    v.maxValue(5)
  ),
});

export default Example;
