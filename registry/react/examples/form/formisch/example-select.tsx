"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { Button } from "@registry/react/components/button";
import { toast } from "@registry/react/components/toast";
import * as v from "valibot";
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

const Example = () => {
  const form = useForm({
    initialInput: { language: [""] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "language-submitted",
      title: "Language submitted",
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
                  <Select
                    collection={collection}
                    name={field.props.name}
                    onValueChange={({ value }) => field.onChange(value)}
                    value={field.input}
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
  language: v.pipe(
    v.array(v.string()),
    v.check((val) => val[0] !== "", "Please select your spoken language."),
    v.check(
      (val) => !val.includes("auto"),
      "Auto-detection is not allowed. Please select a specific language."
    )
  ),
});

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
