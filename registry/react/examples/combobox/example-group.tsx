"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.continent,
    initialItems,
  });

  return (
    <Combobox
      className="w-full max-w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent className="w-60">
        <ComboboxList>
          {collection.group().map(([continent, group]) => (
            <ComboboxGroup heading={continent} key={continent}>
              {group.map((item) => (
                <ComboboxItem item={item} key={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

const initialItems = [
  { continent: "North America", label: "Canada", value: "ca" },
  { continent: "North America", label: "United States", value: "us" },
  { continent: "North America", label: "Mexico", value: "mx" },
  { continent: "Europe", label: "United Kingdom", value: "uk" },
  { continent: "Europe", label: "Germany", value: "de" },
  { continent: "Europe", label: "France", value: "fr" },
  { continent: "Asia", label: "Japan", value: "jp" },
  { continent: "Asia", label: "South Korea", value: "kr" },
  { continent: "Asia", label: "China", value: "cn" },
];

export default Example;
