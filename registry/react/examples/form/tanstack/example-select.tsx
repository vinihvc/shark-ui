"use client";

import { createListCollection } from "@ark-ui/react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const formSchema = z.object({
  language: z
    .array(z.string())
    .refine((val) => val[0] !== "", "Please select your spoken language.")
    .refine((val) => !val.includes("auto"), {
      message:
        "Auto-detection is not allowed. Please select a specific language.",
    }),
});

const Example = () => {
  const form = useForm({
    defaultValues: {
      language: [""],
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "language-submitted",
        title: "Language submitted",
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <Card asChild className="w-full sm:max-w-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Language Preferences</CardTitle>
          <CardDescription>
            Select your preferred spoken language.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field
                  invalid={!field.state.meta.isValid}
                  orientation="responsive"
                >
                  <FieldContent>
                    <FieldLabel>Spoken Language</FieldLabel>
                    <FieldDescription>
                      For best results, select the language you speak.
                    </FieldDescription>
                    <FieldError>
                      {field.state.meta.errors
                        .map((e) => e?.message || e)
                        .join(", ")}
                    </FieldError>
                  </FieldContent>
                  <Select
                    collection={collection}
                    name={field.name}
                    onValueChange={({ value }) => field.handleChange(value)}
                    value={field.state.value}
                  >
                    <SelectTrigger className="w-full min-w-32">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {collection.items.map((item) => (
                        <SelectItem item={item} key={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
              name="language"
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

const collection = createListCollection({
  items: [
    { label: "Auto", value: "auto" },
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Italian", value: "it" },
    { label: "Chinese", value: "zh" },
    { label: "Japanese", value: "ja" },
  ],
});

export default Example;
