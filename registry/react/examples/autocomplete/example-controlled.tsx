"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";
import { ComboboxList } from "@/registry/react/components/combobox";

const Example = () => {
  const [value, setValue] = React.useState<string | undefined>("banana");

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <Autocomplete
        className="w-full"
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(e) => setValue(e.value?.at(0))}
        value={value ? [value] : []}
      >
        <AutocompleteInput placeholder="Select a fruit..." />
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
      <p className="text-center text-muted-foreground text-sm">
        Selected: {value ?? "(none)"}
      </p>
    </div>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export default Example;
