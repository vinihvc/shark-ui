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
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  });

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Fruits</FieldLabel>
      <Autocomplete
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <AutocompleteInput
          aria-label="Search items"
          placeholder="Search items…"
        />
        <AutocompleteContent>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <ComboboxList>
            {collection.items.map((item) => (
              <AutocompleteItem item={item} key={item.value}>
                {item.label}
              </AutocompleteItem>
            ))}
          </ComboboxList>
        </AutocompleteContent>
      </Autocomplete>
      <FieldDescription>Select an item.</FieldDescription>
    </Field>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

export default Example;
