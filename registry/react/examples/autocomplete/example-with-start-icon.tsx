"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { AppleIcon } from "lucide-react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";
import { ComboboxList } from "@/registry/react/components/combobox";
import { InputGroupAddon } from "@/registry/react/components/input-group";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Autocomplete
      className="w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput placeholder="Search fruits...">
        <InputGroupAddon align="inline-start">
          <AppleIcon />
        </InputGroupAddon>
      </AutocompleteInput>
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
];

export default Example;
