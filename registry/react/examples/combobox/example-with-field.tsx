"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Field,
  FieldError,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  });

  return (
    <Field className="w-64">
      <FieldLabel>Country</FieldLabel>
      <Combobox
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        required
      >
        <ComboboxInput placeholder="Select a country..." />
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
      <FieldHelper>We'll use this for shipping estimates</FieldHelper>
      <FieldError>Please select a valid country</FieldError>
    </Field>
  );
};

const initialItems = [
  { label: "Brazil", value: "br" },
  { label: "Mexico", value: "mx" },
  { label: "Ireland", value: "ie" },
];

export default Example;
