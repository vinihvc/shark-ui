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

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  const form = useForm({
    initialInput: { department: [""] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      id: "department-submitted",
      title: "Team preference saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Role setup</CardTitle>
          <CardDescription>
            Tell us which team you work with most so we can tailor workflows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["department"]}>
              {(field) => (
                <Field invalid={Boolean(field.errors?.length)}>
                  <FieldLabel>Primary department</FieldLabel>
                  <Combobox
                    collection={collection}
                    onInputValueChange={({ inputValue }) => filter(inputValue)}
                    onValueChange={(e) => field.onChange(e.value)}
                    value={field.input}
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

const formSchema = v.object({
  department: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Select the department that best matches your role."),
    v.check(
      (val) => val[0] !== "",
      "Select the department that best matches your role."
    )
  ),
});

const initialItems = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Product", value: "product" },
  { label: "Marketing", value: "marketing" },
  { label: "Operations", value: "operations" },
];

export default Example;
