"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@registry/react/components/toast";
import { Controller, useForm } from "react-hook-form";
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

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  const form = useForm({
    defaultValues: { stack: [""] },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      id: "stack-submitted",
      title: "Stack preference saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Tech stack</CardTitle>
          <CardDescription>
            Select the technology you're most familiar with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="stack"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>Primary technology</FieldLabel>
                  <Autocomplete
                    collection={collection}
                    onInputValueChange={({ inputValue }) => filter(inputValue)}
                    onValueChange={(e) => field.onChange(e.value)}
                    value={field.value}
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
