"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Field, FieldLabel } from "@registry/react/components/field";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";

const AutocompleteDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Field className="w-full max-w-64">
      <FieldLabel>Search fruits</FieldLabel>
      <Autocomplete
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <AutocompleteInput placeholder="e.g. Apple" showClear />
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
    </Field>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export default AutocompleteDemo;
