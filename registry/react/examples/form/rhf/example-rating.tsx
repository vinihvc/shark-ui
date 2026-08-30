"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@registry/react/components/toast";
import { Controller, useForm } from "react-hook-form";
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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Rating } from "@/registry/react/components/rating";

const Example = () => {
  const form = useForm({
    defaultValues: { recommendScore: 0 },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      id: "rating-submitted",
      title: "Feedback saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Quick feedback</CardTitle>
          <CardDescription>
            Help us improve by sharing how likely you are to recommend Shark UI
            to a colleague.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="recommendScore"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>How useful is this project?</FieldLabel>
                  <Rating
                    count={5}
                    onValueChange={(e) => field.onChange(e.value ?? 0)}
                    value={field.value ?? 0}
                  />
                  <FieldDescription>
                    1 = not likely, 5 = very likely.
                  </FieldDescription>
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
  recommendScore: z
    .number()
    .min(1, "Please rate how likely you are to recommend us.")
    .max(5),
});

export default Example;
