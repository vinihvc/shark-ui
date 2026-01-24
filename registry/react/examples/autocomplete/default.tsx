"use client";

import { useFilter } from "@ark-ui/react";
import { useListCollection } from "@ark-ui/react/combobox";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";

const AutocompleteDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["Apple", "Banana", "Cherry", "Date"],
    filter: contains,
  });

  const handleInputChange = (details: { inputValue: string }) => {
    filter(details.inputValue);
  };

  return (
    <Autocomplete
      collection={collection}
      onInputValueChange={handleInputChange}
    >
      <AutocompleteControl>
        <AutocompleteInput />
      </AutocompleteControl>

      <AutocompleteContent>
        <AutocompleteEmpty />
        <AutocompleteGroup>
          {collection.items.map((item) => (
            <AutocompleteItem item={item} key={item}>
              {item}
            </AutocompleteItem>
          ))}
        </AutocompleteGroup>
      </AutocompleteContent>
    </Autocomplete>
  );
};

export default AutocompleteDemo;
