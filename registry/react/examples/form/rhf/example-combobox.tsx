"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
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
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const formSchema = z.object({
  department: z
    .array(z.string())
    .min(1, "Select the department that best matches your role.")
    .refine(
      (val) => val[0] !== "",
      "Select the department that best matches your role."
    ),
});

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  const form = useForm({
    defaultValues: { department: [""] },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      id: "department-submitted",
      title: "Team preference saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Role setup</CardTitle>
          <CardDescription>
            Tell us which team you work with most so we can tailor workflows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="department"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel>Primary department</FieldLabel>
                  <Combobox
                    collection={collection}
                    onInputValueChange={({ inputValue }) => filter(inputValue)}
                    onValueChange={(e) => field.onChange(e.value)}
                    value={field.value}
                  >
                    <ComboboxInput
                      placeholder="Search departments…"
                      showClear
                    />
                    <ComboboxContent>
                      <ComboboxList>
                        {collection.items.map((item) => (
                          <ComboboxItem item={item} key={item.value}>
                            {item.label}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
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
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Product", value: "product" },
  { label: "Marketing", value: "marketing" },
  { label: "Operations", value: "operations" },
];

export default Example;
