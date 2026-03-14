"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";
import { ComboboxList } from "@/registry/react/components/combobox";
import {
  Field,
  FieldError,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Field className="w-64">
      <FieldLabel>Country</FieldLabel>
      <Autocomplete
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        required
      >
        <AutocompleteInput placeholder="Select a country..." />
        <AutocompleteContent>
          <AutocompleteEmpty />
          <ComboboxList>
            {collection.items.map((item) => (
              <AutocompleteItem item={item} key={item.value}>
                {item.label}
              </AutocompleteItem>
            ))}
          </ComboboxList>
        </AutocompleteContent>
      </Autocomplete>
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
