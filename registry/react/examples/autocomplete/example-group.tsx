"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteInput,
  AutocompleteItem,
} from "@/registry/react/components/autocomplete";
import { ComboboxList } from "@/registry/react/components/combobox";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.continent,
    initialItems,
  });

  return (
    <Autocomplete
      className="w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput placeholder="Select a timezone" />
      <AutocompleteContent className="w-60">
        <AutocompleteEmpty />
        <ComboboxList>
          {collection.group().map(([continent, group]) => (
            <AutocompleteGroup heading={continent} key={continent}>
              {group.map((item) => (
                <AutocompleteItem item={item} key={item.value}>
                  {item.label}
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
          ))}
        </ComboboxList>
      </AutocompleteContent>
    </Autocomplete>
  );
};

const initialItems = [
  { label: "Canada", value: "ca", continent: "North America" },
  { label: "United States", value: "us", continent: "North America" },
  { label: "Mexico", value: "mx", continent: "North America" },
  { label: "United Kingdom", value: "uk", continent: "Europe" },
  { label: "Germany", value: "de", continent: "Europe" },
  { label: "France", value: "fr", continent: "Europe" },
  { label: "Japan", value: "jp", continent: "Asia" },
  { label: "South Korea", value: "kr", continent: "Asia" },
  { label: "China", value: "cn", continent: "Asia" },
];

export default Example;
