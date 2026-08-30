"use client";

import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
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
  FieldLabel,
} from "@/registry/react/components/field";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const form = useForm({
    initialInput: { language: "" },
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
    <Card asChild className="w-full sm:max-w-lg">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Language Preferences</CardTitle>
          <CardDescription>
            Select your preferred spoken language.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["language"]}>
              {(field) => (
                <Field
                  invalid={Boolean(field.errors?.length)}
                  orientation="responsive"
                >
                  <FieldContent>
                    <FieldLabel>Spoken Language</FieldLabel>
                    <FieldDescription>
                      For best results, select the language you speak.
                    </FieldDescription>
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </FieldContent>
                  <NativeSelect
                    className="min-w-32"
                    {...field.props}
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.input}
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

const spokenLanguages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Italian", value: "it" },
  { label: "Chinese", value: "zh" },
  { label: "Japanese", value: "ja" },
] as const;

const formSchema = v.object({
  language: v.pipe(
    v.string(),
    v.minLength(1, "Please select your spoken language."),
    v.check(
      (val) => val !== "auto",
      "Auto-detection is not allowed. Please select a specific language."
    )
  ),
});

export default Example;
