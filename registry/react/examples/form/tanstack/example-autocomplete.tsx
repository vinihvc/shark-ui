"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
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
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  const form = useForm({
    defaultValues: { stack: [""] },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        id: "stack-submitted",
        title: "Stack preference saved",
      });
    },
    validators: { onSubmit: formSchema },
  });

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Tech stack</CardTitle>
          <CardDescription>
            Select the technology you're most familiar with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <FieldLabel>Primary technology</FieldLabel>
                  <Autocomplete
                    collection={collection}
                    onInputValueChange={({ inputValue }) => filter(inputValue)}
                    onValueChange={(e) => field.handleChange(e.value)}
                    value={field.state.value}
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
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="stack"
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

const initialItems = [
  { label: "React", value: "react" },
  { label: "TypeScript", value: "typescript" },
  { label: "Node.js", value: "nodejs" },
  { label: "Go", value: "go" },
  { label: "Python", value: "python" },
  { label: "Rust", value: "rust" },
];

export default Example;

const formSchema = z.object({
  stack: z
    .array(z.string())
    .min(1, "Pick a suggestion or type your primary technology.")
    .refine(
      (val) => val[0] !== "",
      "Pick a suggestion or type your primary technology."
    ),
});
