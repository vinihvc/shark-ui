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
import { Textarea } from "@/registry/react/components/textarea";

const formSchema = z.object({
  about: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(200, "Please keep it under 200 characters."),
});

const Example = () => {
  const form = useForm({
    defaultValues: {
      about: "",
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
      id: "about-submitted",
      title: "About submitted",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Personalization</CardTitle>
          <CardDescription>
            Customize your experience by telling us more about yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="about"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>More about you</FieldLabel>
                  <Textarea
                    {...field}
                    className="min-h-[120px]"
                    placeholder="I'm a software engineer..."
                  />
                  <FieldDescription>
                    Tell us more about yourself. This will be used to help us
                    personalize your experience.
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

export default Example;
