"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { toast } from "@registry/react/components/toast";
import * as v from "valibot";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";
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

const formSchema = v.object({
  stack: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Pick a suggestion or type your primary technology."),
    v.check(
      (val) => val[0] !== "",
      "Pick a suggestion or type your primary technology."
    )
  ),
});

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  const form = useForm({
    initialInput: { stack: [""] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "stack-submitted",
      title: "Stack preference saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Tech stack</CardTitle>
          <CardDescription>
            Select the technology you&apos;re most familiar with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["stack"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Primary technology</FieldLabel>
                  <Autocomplete
                    collection={collection}
                    onInputValueChange={({ inputValue }) => filter(inputValue)}
                    onValueChange={(e) => field.onChange(e.value)}
                    value={field.input}
                  >
                    <AutocompleteInput
                      placeholder="Search or type a technology…"
                      showClear
                    />
                    <AutocompleteContent>
                      <AutocompleteEmpty />
                      <AutocompleteList>
                        {collection.items.map((item) => (
                          <AutocompleteItem item={item} key={item.value}>
                            {item.label}
                          </AutocompleteItem>
                        ))}
                      </AutocompleteList>
                    </AutocompleteContent>
                  </Autocomplete>
                  <FieldDescription>
                    Type to filter the list, then pick one option.
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

const initialItems = [
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "nodejs" },
  { label: "Go", value: "go" },
  { label: "Python", value: "python" },
  { label: "Rust", value: "rust" },
];

export default Example;
