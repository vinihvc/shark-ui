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
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const spokenLanguages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Italian", value: "it" },
  { label: "Chinese", value: "zh" },
  { label: "Japanese", value: "ja" },
] as const;

const formSchema = z.object({
  language: z
    .string()
    .min(1, "Please select your spoken language.")
    .refine((val) => val !== "auto", {
      message:
        "Auto-detection is not allowed. Please select a specific language.",
    }),
});

const Example = () => {
  const form = useForm({
    defaultValues: {
      language: "",
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
                  <NativeSelect
                    className="min-w-32"
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    value={field.state.value}
                  >
                    <NativeSelectOption value="auto">Auto</NativeSelectOption>
                    {spokenLanguages.map((language) => (
                      <NativeSelectOption
                        key={language.value}
                        value={language.value}
                      >
                        {language.label}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
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

export default Example;
