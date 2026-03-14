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

const AutocompleteDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  });

  return (
    <Autocomplete
      className="w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput />
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
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export default AutocompleteDemo;
